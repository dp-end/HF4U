import { Component, OnInit, computed, signal } from '@angular/core';
import { EventService } from '../../../core/services/EventService/eventService';
import { Event } from '../../../core/models/event';
import { EventCard } from '../../../shared/components/event-card/event-card';
import { SearchBar } from '../../../shared/components/search-bar/search-bar';
import { CategoryChips } from '../../../shared/components/category-chips/category-chips';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/AuthService/auth-service';
import { UiButton } from '../../../shared/components/ui-button/ui-button';
import { UiState } from '../../../shared/components/ui-state/ui-state';

@Component({
  selector: 'app-student-home',
  imports: [EventCard, SearchBar, CategoryChips, UiButton, UiState],
  templateUrl: './student-home.html',
  styleUrl: './student-home.css',
})
export class StudentHome implements OnInit {
  events = signal<Event[]>([]);
  searchQuery = signal<string>('');
  isLoading = signal<boolean>(false);
  errorMessage = signal<string>('');
  categories = signal<string[]>(['Tümü','Teknoloji','Sanat','Spor','Kariyer','Sosyal']);
  selectedCategory = signal<string>('Tümü');

  filteredEvents = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const category = this.selectedCategory();

    return this.events().filter((event) => {
      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        (event.clubName ?? '').toLowerCase().includes(query);

      const matchesCategory =
        category === 'Tümü' || this.categoryLabel(event.category) === category;

      return matchesSearch && matchesCategory;
    });
  });

  updateCategory(category:string):void {
    this.selectedCategory.set(category);
  }


  constructor(
    private eventService: EventService,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');
    this.eventService.getAllEvents().subscribe({
      next: (response) => {
        this.events.set(response.data);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Etkinlikler yüklenemedi.');
        this.isLoading.set(false);
      },
    });
  }

  updateSearchQuery(value: string): void {
    this.searchQuery.set(value);
  }

  registerToEvent(eventId:number):void {
    this.eventService.registerToEvent(eventId).subscribe({
      next:()=> {
        this.loadEvents();
      },
      error:() => {
        this.errorMessage.set('Kayıt işlemi başarısız oldu.');
      },
    });
  }

  openEventDetail(eventId:number):void {
    this.router.navigate(['/student/events', eventId]);
  }

  openRegistrations(): void {
    this.router.navigate(['/student/registrations']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  private categoryLabel(category?: string): string {
    const labels: Record<string, string> = {
      Technology: 'Teknoloji',
      Art: 'Sanat',
      Sport: 'Spor',
      Sports: 'Spor',
      Career: 'Kariyer',
      Social: 'Sosyal',
    };

    return category ? labels[category] ?? category : '';
  }

}
