import { Component, OnInit, signal } from '@angular/core';
import { Event } from '../../../core/models/event';
import { EventService } from '../../../core/services/EventService/eventService';

@Component({
  selector: 'app-student-home',
  imports: [],
  templateUrl: './student-home.html',
  styleUrl: './student-home.css',
})
export class StudentHome implements OnInit {

  events = signal<Event[]>([]);

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe({
      next: (response) => {
        this.events.set(response.data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
