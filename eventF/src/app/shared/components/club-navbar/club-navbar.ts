import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/AuthService/auth-service';
import { UiButton } from '../ui-button/ui-button';

@Component({
  selector: 'app-club-navbar',
  imports: [UiButton],
  templateUrl: './club-navbar.html',
  styleUrl: './club-navbar.css',
})
export class ClubNavbar {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
