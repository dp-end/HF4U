import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnChanges, SimpleChanges, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventMedia, MediaType } from '../../../core/models/event-media';
import { EventService } from '../../../core/services/EventService/eventService';
import { Toast } from '../../../shared/components/toast/toast';
import { UiButton } from '../../../shared/components/ui-button/ui-button';
import { UiState } from '../../../shared/components/ui-state/ui-state';

type FeedbackType = 'success' | 'error';

@Component({
  selector: 'app-club-media-manager',
  imports: [ReactiveFormsModule, Toast, UiButton, UiState],
  templateUrl: './club-media-manager.html',
  styleUrl: './club-media-manager.css',
})
export class ClubMediaManager implements OnChanges {
  eventId = input.required<number>();
  private fb = inject(FormBuilder);

  media = signal<EventMedia[]>([]);
  isLoading = signal<boolean>(false);
  isSubmitting = signal<boolean>(false);
  deletingMediaId = signal<number | null>(null);
  errorMessage = signal<string>('');
  feedbackMessage = signal<string>('');
  feedbackType = signal<FeedbackType>('success');

  mediaForm = this.fb.group({
    mediaUrl: ['', [Validators.required]],
    mediaType: ['IMAGE' as MediaType, [Validators.required]],
    orderIndex: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private eventService: EventService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['eventId']) {
      this.loadMedia();
    }
  }

  loadMedia(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.eventService.getEventMedia(this.eventId()).subscribe({
      next: (response) => {
        this.media.set(response.data);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Medya listesi yüklenemedi.');
        this.isLoading.set(false);
      },
    });
  }

  addMedia(): void {
    if (this.mediaForm.invalid) {
      this.mediaForm.markAllAsTouched();
      return;
    }

    const value = this.mediaForm.getRawValue();

    this.isSubmitting.set(true);
    this.feedbackMessage.set('');

    this.eventService.addEventMedia(this.eventId(), {
      mediaUrl: value.mediaUrl ?? '',
      mediaType: value.mediaType ?? 'IMAGE',
      orderIndex: Number(value.orderIndex ?? 0),
    }).subscribe({
      next: () => {
        this.feedbackType.set('success');
        this.feedbackMessage.set('Medya eklendi.');
        this.isSubmitting.set(false);
        this.mediaForm.reset({
          mediaUrl: '',
          mediaType: 'IMAGE',
          orderIndex: this.media().length + 1,
        });
        this.loadMedia();
      },
      error: (error: HttpErrorResponse) => {
        this.feedbackType.set('error');
        this.feedbackMessage.set(this.getErrorMessage(error, 'Medya eklenemedi.'));
        this.isSubmitting.set(false);
      },
    });
  }

  deleteMedia(media: EventMedia): void {
    const confirmed = confirm('Bu medyayı silmek istiyor musun?');

    if (!confirmed) {
      return;
    }

    this.deletingMediaId.set(media.id);
    this.feedbackMessage.set('');

    this.eventService.deleteEventMedia(this.eventId(), media.id).subscribe({
      next: () => {
        this.media.update((items) => items.filter((item) => item.id !== media.id));
        this.feedbackType.set('success');
        this.feedbackMessage.set('Medya silindi.');
        this.deletingMediaId.set(null);
      },
      error: (error: HttpErrorResponse) => {
        this.feedbackType.set('error');
        this.feedbackMessage.set(this.getErrorMessage(error, 'Medya silinemedi.'));
        this.deletingMediaId.set(null);
      },
    });
  }

  clearFeedback(): void {
    this.feedbackMessage.set('');
  }

  private getErrorMessage(error: HttpErrorResponse, fallback: string): string {
    const responseBody = error.error as { message?: string } | null;

    return responseBody?.message ?? fallback;
  }
}
