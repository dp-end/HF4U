import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const expectedRole = route.data?.['role'];
  const currentRole= localStorage.getItem('role');
  if(currentRole === expectedRole){
    return true;
  }
  router.navigate(['/login']);

  return false;
};
