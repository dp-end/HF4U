import { Component,OnInit } from '@angular/core';
import { Event } from '../../../core/services/EventService/event';

@Component({
  selector: 'app-student-home',
  imports: [],
  templateUrl: './student-home.html',
  styleUrl: './student-home.css',
})
export class StudentHome implements OnInit{
  events: any[] = [];
  constructor(private eventService : Event){}

  ngOnInit(): void{
    console.log("student home loaded");
    this.eventService.getAllEvents().subscribe({
      next:(response: any) => {
        console.log(response);
        this.events = response.data;
      },
      error: (error) =>{
        console.error(error);
      }
    });
  }
}
