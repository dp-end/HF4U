import { Component, input } from '@angular/core';
import { EventStatus } from '../../../core/models/event';
import { Badge, BadgeTone } from '../badge/badge';

@Component({
  selector: 'app-event-status-badge',
  imports: [Badge],
  templateUrl: './event-status-badge.html',
})
export class EventStatusBadge {
  status = input.required<EventStatus>();

  label(): string {
    const labels: Record<EventStatus, string> = {
      PENDING: 'Onay Bekliyor',
      APPROVED: 'Onaylandı',
      REJECTED: 'Reddedildi',
    };

    return labels[this.status()];
  }

  tone(): BadgeTone {
    const tones: Record<EventStatus, BadgeTone> = {
      PENDING: 'neutral',
      APPROVED: 'success',
      REJECTED: 'danger',
    };

    return tones[this.status()];
  }
}
