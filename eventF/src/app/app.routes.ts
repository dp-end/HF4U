import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { StudentHome } from './features/student/student-home/student-home';
import { ClubHome } from './features/club/club-home/club-home';
import { AdminHome } from './features/admin/admin-home/admin-home';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: Login
  },
  {
    path:'student',
    component:StudentHome,
    canActivate:[authGuard]
  },
  {
    path:'club',
    component:ClubHome,
    canActivate:[authGuard]
  },
  {
    path:'admin',
    component:AdminHome,
    canActivate:[authGuard]
  }
];
