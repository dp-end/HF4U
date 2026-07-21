import { Component,input ,output} from '@angular/core';
import { Event } from '../../../core/models/event';
import { EventStatusBadge } from '../event-status-badge/event-status-badge';
import { UiButton } from '../ui-button/ui-button';

@Component({
  selector: 'app-event-card',
  imports: [EventStatusBadge, UiButton],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
  event = input.required<Event>();
  registerClick = output<number>();
  detailClick = output<number>();

  register():void {
    this.registerClick.emit(this.event().id);
  }
  openDetail():void {
    this.detailClick.emit(this.event().id);
  }
}
