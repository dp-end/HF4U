import { Component, computed, input, signal } from '@angular/core';
import { EventMedia } from '../../../core/models/event-media';

@Component({
  selector: 'app-media-carousel',
  imports: [],
  templateUrl: './media-carousel.html',
  styleUrl: './media-carousel.css',
})
export class MediaCarousel {
  media = input<EventMedia[]>([]);
  fallbackTitle = input<string>('');
  activeIndex = signal<number>(0);

  activeMedia = computed(() => {
    const items = this.media();

    if (items.length === 0) {
      return null;
    }

    return items[Math.min(this.activeIndex(), items.length - 1)];
  });

  next(): void {
    if (this.media().length === 0) {
      return;
    }

    this.activeIndex.update((index) => (index + 1) % this.media().length);
  }

  previous(): void {
    if (this.media().length === 0) {
      return;
    }

    this.activeIndex.update((index) => (index - 1 + this.media().length) % this.media().length);
  }

  select(index: number): void {
    this.activeIndex.set(index);
  }
}
