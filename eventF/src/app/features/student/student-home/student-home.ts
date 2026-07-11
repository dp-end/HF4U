import { Component, OnInit, computed, signal } from '@angular/core';
import { EventService } from '../../../core/services/EventService/eventService';
import { Event } from '../../../core/models/event';
import { EventCard } from '../../../shared/components/event-card/event-card';
import { SearchBar } from '../../../shared/components/search-bar/search-bar';

@Component({
  selector: 'app-student-home',
  imports: [EventCard, SearchBar],
  templateUrl: './student-home.html',
  styleUrl: './student-home.css',
})
export class StudentHome implements OnInit {
  events = signal<Event[]>([]);
  searchQuery = signal<string>('');
  isLoading = signal<boolean>(false);
  errorMessage = signal<string>('');

  filteredEvents = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();

    if (!query) {
      return this.events();
    }

    return this.events().filter((event) => {
      return (
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        (event.clubName ?? '').toLowerCase().includes(query)
      );
    });
  });

  constructor(private eventService: EventService) {}

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
        this.errorMessage.set('Events could not be loaded.');
        this.isLoading.set(false);
      },
    });
  }

  updateSearchQuery(value: string): void {
    this.searchQuery.set(value);
  }
}
