import {CanActivate, Router} from '@angular/router';
import {AbstractAuthService} from '../services/abstract-auth-service';
import {PathRoutes} from '../models/constants/path-routes';
import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})
export class GuardStatist implements CanActivate {
  constructor(private authService: AbstractAuthService,
              private router: Router) {
  }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.authService.isStatist()) {
          resolve(true);
        } else {
          this.router.navigate([PathRoutes.HOME_ROUTE]).then();
          resolve(false);
        }
      }, 1000);
    });
  }
}
