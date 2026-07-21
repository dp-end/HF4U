import { Component,input ,output} from '@angular/core';
import { Event, EventStatus } from '../../../core/models/event';
import { Badge } from '../badge/badge';
import { UiButton } from '../ui-button/ui-button';

@Component({
  selector: 'app-event-card',
  imports: [Badge, UiButton],
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
