import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NavigationServiceService } from '../services/navigation-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const cookies = inject(CookieService);
  const navigationService = inject(NavigationServiceService);
  if(cookies.get('token') === '' ){
    navigationService.goLogin();
    return false;
  } else {
    return true;
  }
};
