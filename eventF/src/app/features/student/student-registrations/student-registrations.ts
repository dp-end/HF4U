import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../../core/services/EventService/eventService';
import { AuthService } from '../../../core/services/AuthService/auth-service';
import { MyRegistration } from '../../../core/models/my-registration';
import { FeedbackMessage } from '../../../shared/components/feedback-message/feedback-message';
import { UiButton } from '../../../shared/components/ui-button/ui-button';
import { UiState } from '../../../shared/components/ui-state/ui-state';

type FeedbackType = 'success' | 'error';

@Component({
  selector: 'app-student-registrations',
  imports: [FeedbackMessage, UiButton, UiState],
  templateUrl: './student-registrations.html',
  styleUrl: './student-registrations.css',
})
export class StudentRegistrations implements OnInit {
  registrations = signal<MyRegistration[]>([]);
  isLoading = signal<boolean>(false);
  cancellingEventId = signal<number | null>(null);
  errorMessage = signal<string>('');
  feedbackMessage = signal<string>('');
  feedbackType = signal<FeedbackType>('success');
  studentName = signal<string>('Öğrenci');

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.studentName.set(this.authService.getCurrentUserName());
    this.loadRegistrations();
  }

  loadRegistrations(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.eventService.getMyRegistrations().subscribe({
      next: (response) => {
        this.registrations.set(response.data);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Kayıtların yüklenemedi.');
        this.isLoading.set(false);
      },
    });
  }

  openEvent(eventId: number): void {
    this.router.navigate(['/student/events', eventId]);
  }

  cancelRegistration(eventId: number): void {
    const confirmed = confirm('Bu etkinlik kaydını iptal etmek istiyor musun?');

    if (!confirmed) {
      return;
    }

    this.cancellingEventId.set(eventId);
    this.feedbackMessage.set('');

    this.eventService.cancelRegistration(eventId).subscribe({
      next: () => {
        this.registrations.update((registrations) =>
          registrations.filter((registration) => registration.eventId !== eventId),
        );
        this.feedbackType.set('success');
        this.feedbackMessage.set('Kayıt başarıyla iptal edildi.');
        this.cancellingEventId.set(null);
      },
      error: (error: HttpErrorResponse) => {
        this.feedbackType.set('error');
        this.feedbackMessage.set(this.getErrorMessage(error));
        this.cancellingEventId.set(null);
      },
    });
  }

  goToFeed(): void {
    this.router.navigate(['/student']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  formatEventDate(value: string): string {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return value;
    }

    return new Intl.DateTimeFormat('tr-TR', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  }

  private getErrorMessage(error: HttpErrorResponse): string {
    const responseBody = error.error as { message?: string } | null;

    return responseBody?.message ?? 'Kayıt iptal edilemedi.';
  }
}
