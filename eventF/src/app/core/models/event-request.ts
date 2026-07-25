export interface EventRequest {
  title: string;
  description: string;
  location:string;
  eventDate:string;
  capacity:number;
  category?:string;
  coverImageUrl:string;
}
