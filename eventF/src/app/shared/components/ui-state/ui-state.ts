import { Component, input } from '@angular/core';

export type UiStateTone = 'neutral' | 'error';

@Component({
  selector: 'app-ui-state',
  imports: [],
  templateUrl: './ui-state.html',
  styleUrl: './ui-state.css',
})
export class UiState {
  title = input<string>('');
  tone = input<UiStateTone>('neutral');
}
