import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isTokenGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
       
  if(localStorage.getItem('userToken')){
    return true
  }
  else{
      router.navigate(['login'])
    return false
  }

};
