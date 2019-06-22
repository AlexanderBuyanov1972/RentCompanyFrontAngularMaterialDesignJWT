import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AbstractAuthService} from '../services/abstract-auth-service';
import {PathRoutes} from '../models/constants/path-routes';

@Injectable({providedIn: 'root'})
export class GuardAdmin implements CanActivate {

  constructor(private authService: AbstractAuthService,
              private router: Router) {
  }
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.authService.isAdmin()) {
          resolve(true);
        } else {
          this.router.navigate([PathRoutes.HOME_ROUTE]).then();
          resolve(false);
        }
      }, 500);
    });
  }

}
