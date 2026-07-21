import { Component,input ,output} from '@angular/core';
import { Event, EventStatus } from '../../../core/models/event';

@Component({
  selector: 'app-event-card',
  imports: [],
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

  statusLabel(status: EventStatus): string {
    const labels: Record<EventStatus, string> = {
      PENDING: 'Onay Bekliyor',
      APPROVED: 'Onaylandı',
      REJECTED: 'Reddedildi',
    };

    return labels[status];
  }
}
