import { Component ,signal} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../../core/services/EventService/eventService';
import { Event } from '../../../core/models/event';

@Component({
  selector: 'app-event-detail',
  imports: [],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
})
export class EventDetail {
  event=signal<Event | null>(null);
  isLoading = signal<boolean>(false);
  errorMessage = signal<string>('');

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private eventService: EventService
  ){}

  ngOnInit():void {
    const eventId = Number (this.route.snapshot.paramMap.get('id'));

    if(!eventId){
      this.errorMessage.set('Event not found');
      return;
    }

    this.loadEvent(eventId);
  }

  loadEvent(eventId:number): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.eventService.getEventById(eventId).subscribe({
      next: (response) => {
        this.event.set(response.data);
        this.isLoading.set(false);
      },
      error:() => {
        this.errorMessage.set('Event could not be loaded.');
        this.isLoading.set(false);
      },
    });
  }

  goBack():void {
    this.router.navigate(['/student']);
  }

  registerToEvent():void {
    const currentEvent = this.event();

    if(!currentEvent){
      return;
    }

    this.eventService.registerToEvent(currentEvent.id).subscribe({
      next:()=> {
        this.loadEvent(currentEvent.id);
      },
      error:() => {
        this.errorMessage.set('Registration failed.');
      },
    });
  }

}
