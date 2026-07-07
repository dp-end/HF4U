import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiResponse } from '../../models/api-response';
import { Event } from '../../models/event';
import { EventRequest } from '../../models/event-request';
import { MyRegistration } from '../../models/my-registration';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  private apiUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<ApiResponse<Event[]>> {
    return this.http.get<ApiResponse<Event[]>>(this.apiUrl);
  }

  getEventById(id:number):Observable<ApiResponse<Event>>{
    return this.http.get<ApiResponse<Event>>(`${this.apiUrl}/${id}`);
  }

  createEvent(request: EventRequest):Observable<ApiResponse<Event>>{
    return this.http.post<ApiResponse<Event>>(this.apiUrl,request);
  }

  registerToEvent(eventId:number):Observable<ApiResponse<string>>{
    return this.http.post<ApiResponse<string>>(`${this.apiUrl}/{eventId}/register`,null);
  }

  getMyRegistration(eventId:number):Observable<ApiResponse<MyRegistration[]>> {
    return this.http.get<ApiResponse<MyRegistration[]>>(`${this.apiUrl}/my-registration`);
  }

  cancelRegistration(eventId:number):Observable<ApiResponse<string>>{
    return this.http.delete<ApiResponse<string>>(`${this.apiUrl}/${eventId}/registration`);
  }

  getMyEvents():Observable<ApiResponse<Event[]>>{
    return this.http.get<ApiResponse<Event[]>>(`${this.apiUrl}/pending`);
  }

  approveEvent(id:number):Observable<ApiResponse<Event>>{
    return this.http.put<ApiResponse<Event>>(`${this.apiUrl}/${id}/approve`,null);
  }

  rejectEvent(id:number):Observable<ApiResponse<Event>>{
    return this.http.put<ApiResponse<Event>>(`${this.apiUrl}/${id}/reject`,null);
  }
}
