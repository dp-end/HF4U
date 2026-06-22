import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/AuthService/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  loginForm !: FormGroup;
  constructor(private fb: FormBuilder , private authService: AuthService , private router : Router){}

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

        switch(response.data.role){

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
        console.log('Login successful');
      },

      error: (error) => {
        console.error(error);
        alert('Email veya şifre hatalı')
      }

    })
  }
}
