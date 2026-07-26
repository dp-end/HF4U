import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiResponse } from '../../models/api-response';
import { DashboardResponse } from '../../models/dashboard-response';
import { Event } from '../../models/event';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private adminUrl = 'http://localhost:8080/api/admin';
  private eventsUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) {}

  getDashboard(): Observable<ApiResponse<DashboardResponse>> {
    return this.http.get<ApiResponse<DashboardResponse>>(`${this.adminUrl}/dashboard`);
  }

  getPendingEvents(): Observable<ApiResponse<Event[]>> {
    return this.http.get<ApiResponse<Event[]>>(`${this.eventsUrl}/pending`);
  }

  approveEvent(id: number): Observable<ApiResponse<Event>> {
    return this.http.put<ApiResponse<Event>>(`${this.eventsUrl}/${id}/approve`, null);
  }

  rejectEvent(id: number): Observable<ApiResponse<Event>> {
    return this.http.put<ApiResponse<Event>>(`${this.eventsUrl}/${id}/reject`, null);
  }

  deleteEvent(id: number): Observable<ApiResponse<string>> {
    return this.http.delete<ApiResponse<string>>(`${this.eventsUrl}/${id}`);
  }
}
