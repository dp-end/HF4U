import { Component, EventEmitter, OnChanges, Output, SimpleChanges, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Event } from '../../../core/models/event';
import { EventRequest } from '../../../core/models/event-request';
import { UiButton } from '../../../shared/components/ui-button/ui-button';

@Component({
  selector: 'app-club-event-form',
  imports: [ReactiveFormsModule, UiButton],
  templateUrl: './club-event-form.html',
  styleUrl: './club-event-form.css',
})
export class ClubEventForm implements OnChanges {
  event = input<Event | null>(null);
  isSubmitting = input<boolean>(false);
  @Output() saved = new EventEmitter<EventRequest>();
  @Output() cancelled = new EventEmitter<void>();
  private fb = inject(FormBuilder);

  eventForm = this.fb.group({
    title: ['', [Validators.required]],
    description: [''],
    location: ['', [Validators.required]],
    eventDate: ['', [Validators.required]],
    capacity: [1, [Validators.required, Validators.min(1)]],
    category: ['Technology'],
    coverImageUrl: [''],
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['event']) {
      return;
    }

    const selectedEvent = this.event();

    this.eventForm.reset({
      title: selectedEvent?.title ?? '',
      description: selectedEvent?.description ?? '',
      location: selectedEvent?.location ?? '',
      eventDate: this.toDatetimeLocalValue(selectedEvent?.eventDate),
      capacity: selectedEvent?.capacity ?? 1,
      category: selectedEvent?.category ?? 'Technology',
      coverImageUrl: selectedEvent?.coverImageUrl ?? '',
    });
  }

  submit(): void {
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
      return;
    }

    const value = this.eventForm.getRawValue();

    this.saved.emit({
      title: value.title ?? '',
      description: value.description ?? '',
      location: value.location ?? '',
      eventDate: value.eventDate ?? '',
      capacity: Number(value.capacity ?? 1),
      category: value.category ?? 'Technology',
      coverImageUrl: value.coverImageUrl ?? '',
    });
  }

  cancel(): void {
    this.cancelled.emit();
  }

  private toDatetimeLocalValue(value?: string): string {
    if (!value) {
      return '';
    }

    return value.slice(0, 16);
  }
}
