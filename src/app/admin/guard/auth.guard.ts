import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
       
  if(localStorage.getItem('adminToken')){
    return true
  }
  else{
      router.navigate(['admin/login'])
    return false
  }

  return true;
};
