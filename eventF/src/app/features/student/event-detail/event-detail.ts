import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../../core/services/EventService/eventService';
import { Event } from '../../../core/models/event';
import { AuthService } from '../../../core/services/AuthService/auth-service';

type FeedbackType = 'success' | 'error';

@Component({
  selector: 'app-event-detail',
  imports: [],
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
      return 'Registering...';
    }

    if (this.isRegistered()) {
      return 'Already Registered';
    }

    if (this.event()?.availableSpots === 0) {
      return 'Event Full';
    }

    return 'Register';
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
      this.errorMessage.set('Event not found.');
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
        this.errorMessage.set('Event could not be loaded.');
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
        this.feedbackMessage.set('Registration completed successfully.');
        this.isRegistering.set(false);
        this.loadEvent(currentEvent.id);
      },
      error: (error: HttpErrorResponse) => {
        const message = this.getErrorMessage(error);

        if (message.toLowerCase().includes('already registered')) {
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

    return responseBody?.message ?? 'Registration failed.';
  }
}
