import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/AuthService/auth-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  loginForm !: FormGroup;
  constructor(private fb: FormBuilder , private authService: AuthService){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email:[''],
      password:['']
   })
  }

  onSubmit(){
    this.authService.login(this.loginForm.value).subscribe({
      next: (response: any) => {
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('role',response.data.role);
        localStorage.setItem('fullName',response.data.fullName);
        console.log('Login successful');
      }
    })
  }
}
