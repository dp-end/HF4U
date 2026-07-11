export type EventStatus= 'PENDING' | 'APPROVED' | 'REJECTED';

export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  eventDate: string;
  capacity: number;
  eventStatus: EventStatus;
  createdAt:string;
  category?:string;
  coverImageUrl:string;
  clubName?:string;
  registeredCount:number;
  availableSpots: number;
}
