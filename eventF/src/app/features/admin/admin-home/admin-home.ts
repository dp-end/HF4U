import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, computed, signal } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AdminUser } from '../../../core/models/admin-user';
import { DashboardResponse } from '../../../core/models/dashboard-response';
import { Event, EventStatus } from '../../../core/models/event';
import { UserRole } from '../../../core/models/user_role';
import { AdminService } from '../../../core/services/AdminService/admin-service';
import { AdminNavbar } from '../../../shared/components/admin-navbar/admin-navbar';
import { Badge } from '../../../shared/components/badge/badge';
import { EventStatusBadge } from '../../../shared/components/event-status-badge/event-status-badge';
import { Toast } from '../../../shared/components/toast/toast';
import { UiButton } from '../../../shared/components/ui-button/ui-button';
import { UiState } from '../../../shared/components/ui-state/ui-state';

type FeedbackType = 'success' | 'error';
type AdminView = 'pending' | 'events' | 'users';
type EventFilter = 'ALL' | EventStatus;
type UserFilter = 'ALL' | UserRole;

@Component({
  selector: 'app-admin-home',
  imports: [AdminNavbar, Badge, EventStatusBadge, Toast, UiButton, UiState],
  templateUrl: './admin-home.html',
  styleUrl: './admin-home.css',
})
export class AdminHome implements OnInit {
  dashboard = signal<DashboardResponse | null>(null);
  pendingEvents = signal<Event[]>([]);
  allEvents = signal<Event[]>([]);
  users = signal<AdminUser[]>([]);
  activeView = signal<AdminView>('pending');
  eventFilter = signal<EventFilter>('ALL');
  userFilter = signal<UserFilter>('ALL');
  isLoading = signal<boolean>(false);
  processingEventId = signal<number | null>(null);
  errorMessage = signal<string>('');
  feedbackMessage = signal<string>('');
  feedbackType = signal<FeedbackType>('success');

  pendingCount = computed(() => this.pendingEvents().length);
  approvedCount = computed(() => this.allEvents().filter((event) => event.eventStatus === 'APPROVED').length);
  rejectedCount = computed(() => this.allEvents().filter((event) => event.eventStatus === 'REJECTED').length);
  filteredEvents = computed(() => {
    const filter = this.eventFilter();

    if (filter === 'ALL') {
      return this.allEvents();
    }

    return this.allEvents().filter((event) => event.eventStatus === filter);
  });
  filteredUsers = computed(() => {
    const filter = this.userFilter();

    if (filter === 'ALL') {
      return this.users();
    }

    return this.users().filter((user) => user.role === filter);
  });

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadAdminData();
  }

  loadAdminData(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    forkJoin({
      dashboard: this.adminService.getDashboard(),
      pendingEvents: this.adminService.getPendingEvents(),
      events: this.adminService.getEvents(),
      users: this.adminService.getUsers(),
    }).subscribe({
      next: ({ dashboard, pendingEvents, events, users }) => {
        this.dashboard.set(dashboard.data);
        this.pendingEvents.set(pendingEvents.data);
        this.allEvents.set(events.data);
        this.users.set(users.data);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Admin panel verileri yüklenemedi.');
        this.isLoading.set(false);
      },
    });
  }

  setActiveView(view: AdminView): void {
    this.activeView.set(view);
  }

  setEventFilter(filter: EventFilter): void {
    this.eventFilter.set(filter);
  }

  setUserFilter(filter: UserFilter): void {
    this.userFilter.set(filter);
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
        this.allEvents.update((events) => events.filter((item) => item.id !== event.id));
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

  eventStatusLabel(status: EventStatus): string {
    const labels: Record<EventStatus, string> = {
      PENDING: 'Onay bekleyen',
      APPROVED: 'Onaylanan',
      REJECTED: 'Reddedilen',
    };

    return labels[status];
  }

  roleLabel(role: UserRole): string {
    const labels: Record<UserRole, string> = {
      ADMIN: 'Admin',
      CLUB_MANAGER: 'Kulüp yöneticisi',
      STUDENT: 'Öğrenci',
    };

    return labels[role];
  }

  roleTone(role: UserRole): 'success' | 'neutral' | 'danger' {
    if (role === 'ADMIN') {
      return 'danger';
    }

    if (role === 'CLUB_MANAGER') {
      return 'success';
    }

    return 'neutral';
  }

  formatUserDate(value?: string): string {
    if (!value) {
      return 'Tarih yok';
    }

    return this.formatEventDate(value);
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
        this.allEvents.update((events) => events.map((event) => {
          if (event.id !== eventId) {
            return event;
          }

          return {
            ...event,
            eventStatus: action === 'approve' ? 'APPROVED' : 'REJECTED',
          };
        }));
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
    forkJoin({
      dashboard: this.adminService.getDashboard(),
      events: this.adminService.getEvents(),
    }).subscribe({
      next: ({ dashboard, events }) => {
        this.dashboard.set(dashboard.data);
        this.allEvents.set(events.data);
      },
    });
  }

  private getErrorMessage(error: HttpErrorResponse, fallback: string): string {
    const responseBody = error.error as { message?: string } | null;

    return responseBody?.message ?? fallback;
  }

}
