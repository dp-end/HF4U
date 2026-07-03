import { UserRole } from "../user_role";

export interface LoginResponse {
  token:string;
  userId:number;
  fullName:string;
  role:UserRole;
}
