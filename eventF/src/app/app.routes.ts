import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { StudentHome } from './features/student/student-home/student-home';
import { ClubHome } from './features/club/club-home/club-home';
import { AdminHome } from './features/admin/admin-home/admin-home';
import { authGuard } from './core/guards/auth/auth-guard';
import { roleGuard } from './core/guards/role/role-guard';

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
    canActivate:[authGuard,roleGuard],
    data: {
      role:'STUDENT'
    }
  },
  {
    path:'club',
    component:ClubHome,
    canActivate:[authGuard,roleGuard],
    data: {
      role:'CLUB_MANAGER'
    }
  },
  {
    path:'admin',
    component:AdminHome,
    canActivate:[authGuard,roleGuard],
    data: {
      role:'ADMIN'
    }
  }
];
