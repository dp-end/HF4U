import { Component,input ,output} from '@angular/core';
import { Event } from '../../../core/models/event';

@Component({
  selector: 'app-event-card',
  imports: [],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
  event = input.required<Event>();
  registerClick = output<number>();
  register():void {
    this.registerClick.emit(this.event().id);
  }
}
