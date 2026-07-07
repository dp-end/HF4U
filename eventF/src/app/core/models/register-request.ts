import { UserRole } from "./user_role";

export interface RegisterRequest {
  fullName:string;
  email:string;
  password:string;
  role:Exclude<UserRole,'ADMIN'>;
}
