import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { StudentHome } from './features/student/student-home/student-home';
import { ClubHome } from './features/club/club-home/club-home';
import { AdminHome } from './features/admin/admin-home/admin-home';

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
    component:StudentHome
  },
  {
    path:'club',
    component:ClubHome
  },
  {
    path:'admin',
    component:AdminHome
  }
];
