import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/AuthService/auth-service';
import { UserRole } from '../../../core/models/user_role';

type LoginRole = UserRole;

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  selectedRole = signal<LoginRole>('STUDENT');
  errorMessage = signal<string>('');
  isSubmitting = signal<boolean>(false);

  loginForm!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  }


  selectRole(role: LoginRole): void {
    this.selectedRole.set(role);
    this.errorMessage.set('');
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.errorMessage.set('Lütfen e-posta adresini ve şifreni gir.');
      return;
    }

    const request = {
      email: this.loginForm.controls['email'].value ?? '',
      password: this.loginForm.controls['password'].value ?? '',
    };

    this.isSubmitting.set(true);
    this.errorMessage.set('');

    this.authService.login(request).subscribe({
      next: (response) => {
        const user = response.data;

        if (user.role !== this.selectedRole()) {
          this.isSubmitting.set(false);
          this.errorMessage.set('Bu hesap seçilen rolle eşleşmiyor.');
          return;
        }

        localStorage.setItem('token', user.token);
        localStorage.setItem('role', user.role);
        localStorage.setItem('fullName', user.fullName);
        localStorage.setItem('userId', String(user.userId));

        switch (user.role) {
          case 'STUDENT':
            this.router.navigate(['/student']);
            break;
          case 'CLUB_MANAGER':
            this.router.navigate(['/club']);
            break;
          case 'ADMIN':
            this.router.navigate(['/admin']);
            break;
        }
      },
      error: () => {
        this.isSubmitting.set(false);
        this.errorMessage.set('E-posta adresi veya şifre hatalı.');
      },
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  browseAsGuest(): void {
    this.router.navigate(['/student']);
  }
}
