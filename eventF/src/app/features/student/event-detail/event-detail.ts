import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../core/services/EventService/eventService';
import { Event } from '../../../core/models/event';
import { EventMedia } from '../../../core/models/event-media';
import { Badge } from '../../../shared/components/badge/badge';
import { EventStatusBadge } from '../../../shared/components/event-status-badge/event-status-badge';
import { MediaCarousel } from '../../../shared/components/media-carousel/media-carousel';
import { StudentNavbar } from '../../../shared/components/student-navbar/student-navbar';
import { Toast } from '../../../shared/components/toast/toast';
import { UiButton } from '../../../shared/components/ui-button/ui-button';
import { UiState } from '../../../shared/components/ui-state/ui-state';

type FeedbackType = 'success' | 'error';

@Component({
  selector: 'app-event-detail',
  imports: [Badge, EventStatusBadge, MediaCarousel, StudentNavbar, Toast, UiButton, UiState],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
})
export class EventDetail implements OnInit {
  event = signal<Event | null>(null);
  media = signal<EventMedia[]>([]);
  isLoading = signal<boolean>(false);
  isRegistering = signal<boolean>(false);
  isRegistered = signal<boolean>(false);
  errorMessage = signal<string>('');
  feedbackMessage = signal<string>('');
  feedbackType = signal<FeedbackType>('success');
  displayMedia = computed<EventMedia[]>(() => {
    const currentMedia = this.media();
    const currentEvent = this.event();

    if (currentMedia.length > 0) {
      return currentMedia;
    }

    if (!currentEvent?.coverImageUrl) {
      return [];
    }

    return [
      {
        id: 0,
        mediaUrl: currentEvent.coverImageUrl,
        mediaType: 'IMAGE',
        orderIndex: 0,
        createdAt: currentEvent.createdAt,
      },
    ];
  });

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
    private eventService: EventService,
  ) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));

    if (!eventId) {
      this.errorMessage.set('Etkinlik bulunamadı.');
      return;
    }

    this.loadEvent(eventId);
    this.loadMedia(eventId);
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

  loadMedia(eventId: number): void {
    this.eventService.getEventMedia(eventId).subscribe({
      next: (response) => {
        this.media.set(response.data);
      },
      error: () => {
        this.media.set([]);
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

  clearFeedback(): void {
    this.feedbackMessage.set('');
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
