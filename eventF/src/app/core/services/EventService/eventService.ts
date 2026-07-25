import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiResponse } from '../../models/api-response';
import { Event } from '../../models/event';
import { EventMedia, EventMediaRequest } from '../../models/event-media';
import { EventRequest } from '../../models/event-request';
import { MyRegistration } from '../../models/my-registration';
import { Participant } from '../../models/participant';

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

  updateEvent(id: number, request: EventRequest): Observable<ApiResponse<Event>> {
    return this.http.put<ApiResponse<Event>>(`${this.apiUrl}/${id}`, request);
  }

  deleteEvent(id: number): Observable<ApiResponse<string>> {
    return this.http.delete<ApiResponse<string>>(`${this.apiUrl}/${id}`);
  }

  registerToEvent(eventId:number):Observable<ApiResponse<string>>{
    return this.http.post<ApiResponse<string>>(`${this.apiUrl}/${eventId}/register`,null);
  }

  getMyRegistrations():Observable<ApiResponse<MyRegistration[]>> {
    return this.http.get<ApiResponse<MyRegistration[]>>(`${this.apiUrl}/my-registrations`);
  }

  cancelRegistration(eventId:number):Observable<ApiResponse<string>>{
    return this.http.delete<ApiResponse<string>>(`${this.apiUrl}/${eventId}/registration`);
  }

  getMyEvents():Observable<ApiResponse<Event[]>>{
    return this.http.get<ApiResponse<Event[]>>(`${this.apiUrl}/my-events`);
  }

  getEventParticipants(eventId: number): Observable<ApiResponse<Participant[]>> {
    return this.http.get<ApiResponse<Participant[]>>(`${this.apiUrl}/${eventId}/participants`);
  }

  approveEvent(id:number):Observable<ApiResponse<Event>>{
    return this.http.put<ApiResponse<Event>>(`${this.apiUrl}/${id}/approve`,null);
  }

  rejectEvent(id:number):Observable<ApiResponse<Event>>{
    return this.http.put<ApiResponse<Event>>(`${this.apiUrl}/${id}/reject`,null);
  }

  getEventMedia(eventId: number): Observable<ApiResponse<EventMedia[]>> {
    return this.http.get<ApiResponse<EventMedia[]>>(`${this.apiUrl}/${eventId}/media`);
  }

  addEventMedia(eventId: number, request: EventMediaRequest): Observable<ApiResponse<EventMedia>> {
    return this.http.post<ApiResponse<EventMedia>>(`${this.apiUrl}/${eventId}/media`, request);
  }

  updateEventMedia(
    eventId: number,
    mediaId: number,
    request: EventMediaRequest,
  ): Observable<ApiResponse<EventMedia>> {
    return this.http.put<ApiResponse<EventMedia>>(
      `${this.apiUrl}/${eventId}/media/${mediaId}`,
      request,
    );
  }

  deleteEventMedia(eventId: number, mediaId: number): Observable<ApiResponse<string>> {
    return this.http.delete<ApiResponse<string>>(`${this.apiUrl}/${eventId}/media/${mediaId}`);
  }
}
