import { Component, ElementRef, HostListener, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-category-chips',
  imports: [],
  templateUrl: './category-chips.html',
  styleUrl: './category-chips.css',
})
export class CategoryChips {
  categories = input.required<string[]>();
  selectedCategory = input<string>('All');
  isOpen = signal<boolean>(false);

  categoryChange = output<string>();

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  toggleMenu(): void {
    this.isOpen.update((isOpen) => !isOpen);
  }

  selectCategory(category: string): void {
    this.categoryChange.emit(category);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.isOpen.set(false);
    }
  }
}
