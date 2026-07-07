export interface EventRequest {
  title: string;
  description: string;
  location:string;
  eventdate:string;
  capacity:number;
  category?:string;
  coverImageUrl:string;
}
