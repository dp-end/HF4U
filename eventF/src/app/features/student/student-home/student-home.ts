import { Component, OnInit, computed, signal } from '@angular/core';
import { EventService } from '../../../core/services/EventService/eventService';
import { Event } from '../../../core/models/event';
import { EventCard } from '../../../shared/components/event-card/event-card';
import { SearchBar } from '../../../shared/components/search-bar/search-bar';
import { CategoryChips } from '../../../shared/components/category-chips/category-chips';

@Component({
  selector: 'app-student-home',
  imports: [EventCard, SearchBar,CategoryChips],
  templateUrl: './student-home.html',
  styleUrl: './student-home.css',
})
export class StudentHome implements OnInit {
  events = signal<Event[]>([]);
  searchQuery = signal<string>('');
  isLoading = signal<boolean>(false);
  errorMessage = signal<string>('');
  categories = signal<string[]>(['All','Technology','Art','Sport','Career','Social']);
  selectedCategory = signal<string>('All');

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
        category === 'All' || event.category === category;

      return matchesSearch && matchesCategory;
    });
  });

  updateCategory(category:string):void {
    this.selectedCategory.set(category);
  }


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

  registerToEvent(eventId:number):void {
    this.eventService.registerToEvent(eventId).subscribe({
      next:()=> {
        this.loadEvents();
      },
      error:() => {
        this.errorMessage.set('Registration failed.');
      },
    });
  }

}
