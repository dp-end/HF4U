import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, computed, signal } from '@angular/core';
import { Event } from '../../../core/models/event';
import { EventRequest } from '../../../core/models/event-request';
import { Participant } from '../../../core/models/participant';
import { EventService } from '../../../core/services/EventService/eventService';
import { Badge } from '../../../shared/components/badge/badge';
import { ClubNavbar } from '../../../shared/components/club-navbar/club-navbar';
import { EventStatusBadge } from '../../../shared/components/event-status-badge/event-status-badge';
import { Toast } from '../../../shared/components/toast/toast';
import { UiButton } from '../../../shared/components/ui-button/ui-button';
import { UiState } from '../../../shared/components/ui-state/ui-state';
import { ClubEventForm } from '../club-event-form/club-event-form';

type FeedbackType = 'success' | 'error';

@Component({
  selector: 'app-club-home',
  imports: [Badge, ClubEventForm, ClubNavbar, EventStatusBadge, Toast, UiButton, UiState],
  templateUrl: './club-home.html',
  styleUrl: './club-home.css',
})
export class ClubHome implements OnInit {
  events = signal<Event[]>([]);
  participants = signal<Participant[]>([]);
  selectedEvent = signal<Event | null>(null);
  participantEvent = signal<Event | null>(null);
  isLoading = signal<boolean>(false);
  isSubmitting = signal<boolean>(false);
  isFormOpen = signal<boolean>(false);
  isParticipantsOpen = signal<boolean>(false);
  errorMessage = signal<string>('');
  feedbackMessage = signal<string>('');
  feedbackType = signal<FeedbackType>('success');

  totalEvents = computed(() => this.events().length);
  pendingEvents = computed(() => this.events().filter((event) => event.eventStatus === 'PENDING').length);
  approvedEvents = computed(() => this.events().filter((event) => event.eventStatus === 'APPROVED').length);
  rejectedEvents = computed(() => this.events().filter((event) => event.eventStatus === 'REJECTED').length);
  totalRegistrations = computed(() =>
    this.events().reduce((total, event) => total + event.registeredCount, 0),
  );

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.eventService.getMyEvents().subscribe({
      next: (response) => {
        this.events.set(response.data);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Etkinliklerin yüklenemedi.');
        this.isLoading.set(false);
      },
    });
  }

  openCreateForm(): void {
    this.selectedEvent.set(null);
    this.isFormOpen.set(true);
  }

  openEditForm(event: Event): void {
    this.selectedEvent.set(event);
    this.isFormOpen.set(true);
  }

  closeForm(): void {
    this.selectedEvent.set(null);
    this.isFormOpen.set(false);
  }

  saveEvent(request: EventRequest): void {
    const event = this.selectedEvent();
    this.isSubmitting.set(true);
    this.feedbackMessage.set('');

    const saveRequest = event
      ? this.eventService.updateEvent(event.id, request)
      : this.eventService.createEvent(request);

    saveRequest.subscribe({
      next: () => {
        this.feedbackType.set('success');
        this.feedbackMessage.set(event ? 'Etkinlik güncellendi.' : 'Etkinlik oluşturuldu.');
        this.isSubmitting.set(false);
        this.closeForm();
        this.loadEvents();
      },
      error: (error: HttpErrorResponse) => {
        this.feedbackType.set('error');
        this.feedbackMessage.set(this.getErrorMessage(error, 'Etkinlik kaydedilemedi.'));
        this.isSubmitting.set(false);
      },
    });
  }

  deleteEvent(event: Event): void {
    const confirmed = confirm(`"${event.title}" etkinliğini silmek istiyor musun?`);

    if (!confirmed) {
      return;
    }

    this.feedbackMessage.set('');

    this.eventService.deleteEvent(event.id).subscribe({
      next: () => {
        this.events.update((events) => events.filter((item) => item.id !== event.id));
        this.feedbackType.set('success');
        this.feedbackMessage.set('Etkinlik silindi.');
      },
      error: (error: HttpErrorResponse) => {
        this.feedbackType.set('error');
        this.feedbackMessage.set(this.getErrorMessage(error, 'Etkinlik silinemedi.'));
      },
    });
  }

  openParticipants(event: Event): void {
    this.participantEvent.set(event);
    this.participants.set([]);
    this.isParticipantsOpen.set(true);

    this.eventService.getEventParticipants(event.id).subscribe({
      next: (response) => {
        this.participants.set(response.data);
      },
      error: (error: HttpErrorResponse) => {
        this.feedbackType.set('error');
        this.feedbackMessage.set(this.getErrorMessage(error, 'Katılımcılar yüklenemedi.'));
      },
    });
  }

  closeParticipants(): void {
    this.participantEvent.set(null);
    this.participants.set([]);
    this.isParticipantsOpen.set(false);
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

    return category ? labels[category] ?? category : 'Kategori yok';
  }

  formatEventDate(value: string): string {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return value;
    }

    return new Intl.DateTimeFormat('tr-TR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  }

  clearFeedback(): void {
    this.feedbackMessage.set('');
  }

  private getErrorMessage(error: HttpErrorResponse, fallback: string): string {
    const responseBody = error.error as { message?: string } | null;

    return responseBody?.message ?? fallback;
  }

}
