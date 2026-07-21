import { Component, input } from '@angular/core';

export type FeedbackTone = 'success' | 'error';

@Component({
  selector: 'app-feedback-message',
  imports: [],
  templateUrl: './feedback-message.html',
  styleUrl: './feedback-message.css',
})
export class FeedbackMessage {
  tone = input<FeedbackTone>('success');
}
