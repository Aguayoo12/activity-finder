import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { NavigationServiceService } from '../services/navigation-service.service';
import { CookieService } from 'ngx-cookie-service';
import { UserGet } from '../interfaces/UserGet';
import { Rol } from '../interfaces/Rol';

export const adminGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const navigationService = inject(NavigationServiceService);
  const cookie = inject(CookieService);
  
  if(cookie.get('rol') === 'ADMIN'){
    return true;
  }
  else{
    navigationService.goHome();
    return false;
  }
  
  
};
