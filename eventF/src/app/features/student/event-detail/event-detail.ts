import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../../core/services/EventService/eventService';
import { Event, EventStatus } from '../../../core/models/event';
import { AuthService } from '../../../core/services/AuthService/auth-service';
import { Badge } from '../../../shared/components/badge/badge';
import { FeedbackMessage } from '../../../shared/components/feedback-message/feedback-message';
import { UiButton } from '../../../shared/components/ui-button/ui-button';
import { UiState } from '../../../shared/components/ui-state/ui-state';

type FeedbackType = 'success' | 'error';

@Component({
  selector: 'app-event-detail',
  imports: [Badge, FeedbackMessage, UiButton, UiState],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
})
export class EventDetail implements OnInit {
  event = signal<Event | null>(null);
  isLoading = signal<boolean>(false);
  isRegistering = signal<boolean>(false);
  isRegistered = signal<boolean>(false);
  errorMessage = signal<string>('');
  feedbackMessage = signal<string>('');
  feedbackType = signal<FeedbackType>('success');

  canRegister = computed(() => {
    const currentEvent = this.event();

    return (
      !!currentEvent &&
      currentEvent.eventStatus === 'APPROVED' &&
      currentEvent.availableSpots > 0 &&
      !this.isRegistered() &&
      !this.isRegistering()
    );
  });

  registerButtonLabel = computed(() => {
    if (this.isRegistering()) {
      return 'Kayıt yapılıyor...';
    }

    if (this.isRegistered()) {
      return 'Zaten Kayıtlısın';
    }

    if (this.event()?.availableSpots === 0) {
      return 'Kontenjan Doldu';
    }

    return 'Kayıt Ol';
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));

    if (!eventId) {
      this.errorMessage.set('Etkinlik bulunamadı.');
      return;
    }

    this.loadEvent(eventId);
    this.checkRegistrationState(eventId);
  }

  loadEvent(eventId: number): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.eventService.getEventById(eventId).subscribe({
      next: (response) => {
        this.event.set(response.data);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Etkinlik yüklenemedi.');
        this.isLoading.set(false);
      },
    });
  }

  checkRegistrationState(eventId: number): void {
    this.eventService.getMyRegistrations().subscribe({
      next: (response) => {
        const alreadyRegistered = response.data.some(
          (registration) => registration.eventId === eventId,
        );

        this.isRegistered.set(alreadyRegistered);
      },
      error: () => {
        this.isRegistered.set(false);
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/student']);
  }

  openRegistrations(): void {
    this.router.navigate(['/student/registrations']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  statusLabel(status: EventStatus): string {
    const labels: Record<EventStatus, string> = {
      PENDING: 'Onay Bekliyor',
      APPROVED: 'Onaylandı',
      REJECTED: 'Reddedildi',
    };

    return labels[status];
  }

  categoryLabel(category?: string): string {
    const labels: Record<string, string> = {
      Technology: 'Teknoloji',
      Art: 'Sanat',
      Sport: 'Spor',
      Sports: 'Spor',
      Career: 'Kariyer',
      Social: 'Sosyal',
    };

    return category ? labels[category] ?? category : '';
  }

  registerToEvent(): void {
    const currentEvent = this.event();

    if (!currentEvent || !this.canRegister()) {
      return;
    }

    this.isRegistering.set(true);
    this.feedbackMessage.set('');

    this.eventService.registerToEvent(currentEvent.id).subscribe({
      next: () => {
        this.isRegistered.set(true);
        this.feedbackType.set('success');
        this.feedbackMessage.set('Kayıt başarıyla tamamlandı.');
        this.isRegistering.set(false);
        this.loadEvent(currentEvent.id);
      },
      error: (error: HttpErrorResponse) => {
        const message = this.getErrorMessage(error);

        if (message.toLowerCase().includes('already registered') || message.toLowerCase().includes('zaten')) {
          this.isRegistered.set(true);
        }

        this.feedbackType.set('error');
        this.feedbackMessage.set(message);
        this.isRegistering.set(false);
      },
    });
  }

  private getErrorMessage(error: HttpErrorResponse): string {
    const responseBody = error.error as { message?: string } | null;

    return responseBody?.message ?? 'Kayıt işlemi başarısız oldu.';
  }
}
