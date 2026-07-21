import { Component, input } from '@angular/core';

export type BadgeTone = 'success' | 'neutral' | 'danger';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.html',
  styleUrl: './badge.css',
})
export class Badge {
  tone = input<BadgeTone>('neutral');
}
