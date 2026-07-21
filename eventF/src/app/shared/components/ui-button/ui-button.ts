import { Component, input } from '@angular/core';

export type UiButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type UiButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-ui-button',
  imports: [],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css',
})
export class UiButton {
  variant = input<UiButtonVariant>('secondary');
  type = input<UiButtonType>('button');
  disabled = input<boolean>(false);
}
