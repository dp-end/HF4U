import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, computed, signal } from '@angular/core';
import { DashboardResponse } from '../../../core/models/dashboard-response';
import { Event } from '../../../core/models/event';
import { AdminService } from '../../../core/services/AdminService/admin-service';
import { AdminNavbar } from '../../../shared/components/admin-navbar/admin-navbar';
import { Badge } from '../../../shared/components/badge/badge';
import { EventStatusBadge } from '../../../shared/components/event-status-badge/event-status-badge';
import { Toast } from '../../../shared/components/toast/toast';
import { UiButton } from '../../../shared/components/ui-button/ui-button';
import { UiState } from '../../../shared/components/ui-state/ui-state';

type FeedbackType = 'success' | 'error';

@Component({
  selector: 'app-admin-home',
  imports: [AdminNavbar, Badge, EventStatusBadge, Toast, UiButton, UiState],
  templateUrl: './admin-home.html',
  styleUrl: './admin-home.css',
})
export class AdminHome implements OnInit {
  dashboard = signal<DashboardResponse | null>(null);
  pendingEvents = signal<Event[]>([]);
  isLoading = signal<boolean>(false);
  processingEventId = signal<number | null>(null);
  errorMessage = signal<string>('');
  feedbackMessage = signal<string>('');
  feedbackType = signal<FeedbackType>('success');

  pendingCount = computed(() => this.pendingEvents().length);

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadAdminData();
  }

  loadAdminData(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.adminService.getDashboard().subscribe({
      next: (response) => {
        this.dashboard.set(response.data);
      },
      error: () => {
        this.errorMessage.set('Admin özeti yüklenemedi.');
      },
    });

    this.adminService.getPendingEvents().subscribe({
      next: (response) => {
        this.pendingEvents.set(response.data);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Onay bekleyen etkinlikler yüklenemedi.');
        this.isLoading.set(false);
      },
    });
  }

  approveEvent(event: Event): void {
    this.processEvent(event.id, 'approve');
  }

  rejectEvent(event: Event): void {
    this.processEvent(event.id, 'reject');
  }

  deleteEvent(event: Event): void {
    const confirmed = confirm(`"${event.title}" etkinliğini silmek istiyor musun?`);

    if (!confirmed) {
      return;
    }

    this.processingEventId.set(event.id);
    this.feedbackMessage.set('');

    this.adminService.deleteEvent(event.id).subscribe({
      next: () => {
        this.pendingEvents.update((events) => events.filter((item) => item.id !== event.id));
        this.feedbackType.set('success');
        this.feedbackMessage.set('Etkinlik silindi.');
        this.processingEventId.set(null);
        this.refreshDashboard();
      },
      error: (error: HttpErrorResponse) => {
        this.feedbackType.set('error');
        this.feedbackMessage.set(this.getErrorMessage(error, 'Etkinlik silinemedi.'));
        this.processingEventId.set(null);
      },
    });
  }

  categoryLabel(category?: string): string {
    const labels: Record<string, string> = {
      Technology: 'Teknoloji',
      Art: 'Sanat',
      Sport: 'Spor',
      Sports: 'Spor',
      Career: 'Kariyer',
      Social: 'Sosyal',
    };

    return category ? labels[category] ?? category : 'Kategori yok';
  }

  formatEventDate(value: string): string {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return value;
    }

    return new Intl.DateTimeFormat('tr-TR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  }

  thumbnailUrl(event: Event): string {
    const firstImageMedia = event.media?.find((media) => media.mediaType === 'IMAGE');

    return event.coverImageUrl || firstImageMedia?.mediaUrl || '';
  }

  occupancyPercent(event: Event): number {
    if (event.capacity <= 0) {
      return 0;
    }

    return Math.min(100, Math.round((event.registeredCount / event.capacity) * 100));
  }

  clearFeedback(): void {
    this.feedbackMessage.set('');
  }

  private processEvent(eventId: number, action: 'approve' | 'reject'): void {
    this.processingEventId.set(eventId);
    this.feedbackMessage.set('');

    const request = action === 'approve'
      ? this.adminService.approveEvent(eventId)
      : this.adminService.rejectEvent(eventId);

    request.subscribe({
      next: () => {
        this.pendingEvents.update((events) => events.filter((event) => event.id !== eventId));
        this.feedbackType.set('success');
        this.feedbackMessage.set(action === 'approve' ? 'Etkinlik onaylandı.' : 'Etkinlik reddedildi.');
        this.processingEventId.set(null);
        this.refreshDashboard();
      },
      error: (error: HttpErrorResponse) => {
        this.feedbackType.set('error');
        this.feedbackMessage.set(this.getErrorMessage(error, 'İşlem tamamlanamadı.'));
        this.processingEventId.set(null);
      },
    });
  }

  private refreshDashboard(): void {
    this.adminService.getDashboard().subscribe({
      next: (response) => {
        this.dashboard.set(response.data);
      },
    });
  }

  private getErrorMessage(error: HttpErrorResponse, fallback: string): string {
    const responseBody = error.error as { message?: string } | null;

    return responseBody?.message ?? fallback;
  }

}
