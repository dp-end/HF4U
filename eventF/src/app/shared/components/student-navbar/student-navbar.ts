import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/AuthService/auth-service';
import { UiButton } from '../ui-button/ui-button';

export type StudentNavPage = 'feed' | 'registrations' | 'none';

@Component({
  selector: 'app-student-navbar',
  imports: [UiButton],
  templateUrl: './student-navbar.html',
  styleUrl: './student-navbar.css',
})
export class StudentNavbar {
  activePage = input<StudentNavPage>('none');

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  goToFeed(): void {
    this.router.navigate(['/student']);
  }

  goToRegistrations(): void {
    this.router.navigate(['/student/registrations']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
