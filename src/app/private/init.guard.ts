import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const initGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);

  let teste = authService.userAuth;
  let router = inject(Router);

  if(!teste) {
    console.log("redirecionado");
    router.navigate(['/aut']);
    return false;
  }

  console.log("não redirecionado");

  return true;
};
