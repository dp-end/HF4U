import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Event {
  private apiUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient){}

  getAllEvents(){
    return this.http.get(this.apiUrl);
  }
}
