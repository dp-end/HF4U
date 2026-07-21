import { Component, input, output } from '@angular/core';

export type ToastTone = 'success' | 'error';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast {
  message = input<string>('');
  tone = input<ToastTone>('success');
  dismissed = output<void>();

  dismiss(): void {
    this.dismissed.emit();
  }
}
