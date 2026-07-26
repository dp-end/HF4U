import { UserRole } from './user_role';

export interface AdminUser {
  id: number;
  fullName: string;
  email: string;
  role: UserRole;
  createAt?: string;
}
