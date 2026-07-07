import { Component, signal } from '@angular/core';
import { UserRole } from '../../../core/models/user_role';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/AuthService/auth-service';
import { Router } from '@angular/router';
type RegisterRole = Exclude<UserRole, 'ADMIN'>;

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  selectedRole = signal<RegisterRole>('STUDENT');
  errorMessage = signal<string>(' ');
  isSubmitting = signal<boolean>(false);

  registerForm;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ){
    this.registerForm = this.fb.group({
    fullName: ['',[Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required]],
  });

  }

  selectRole(role:RegisterRole):void {
    this.selectedRole.set(role);
    this.errorMessage.set('');
  }

  onSubmit():void {
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      this.errorMessage.set('Please fill in all required fields.');
      return;
    }

    const request = {
      fullName: this.registerForm.controls.fullName.value ?? '',
      email: this.registerForm.controls.email.value ?? '',
      password: this.registerForm.controls.password.value ?? '',
      role:this.selectedRole(),
    };

    this.isSubmitting.set(true);
    this.errorMessage.set('');

    this.authService.register(request).subscribe({
      next:() => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.isSubmitting.set(false);
        this.errorMessage.set('Could not create account. Please check your information.');
      },
    });
  }

  goToLogin():void{
    this.router.navigate(['/login']);
  }

  browseAsGuest(): void {
    this.router.navigate(['/student']);
  }
}
