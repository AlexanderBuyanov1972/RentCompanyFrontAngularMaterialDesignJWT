import {CanActivate, Router} from '@angular/router';
import {PathRoutes} from '../models/constants/path-routes';
import {Injectable} from '@angular/core';
import {AbstractRegistration} from '../services/abstract-registration';

@Injectable({providedIn: 'root'})
export class GuardClerk implements CanActivate {
  constructor(private registrationService: AbstractRegistration,
              private router: Router) {
  }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.registrationService.isClerk()) {
          resolve(true);
        } else {
          this.router.navigate([PathRoutes.HOME_ROUTE]).then();
          resolve(false);
        }
      }, 1000);
    });
  }

}
