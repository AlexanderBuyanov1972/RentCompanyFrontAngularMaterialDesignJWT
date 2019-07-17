import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ResponseFrom} from '../models/response-from';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {LabelRoutes} from '../models/constants/label-routes';
import {TokenService} from './token.service';
import {Credentials} from '../models/credentials';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {PathRoutes} from '../models/constants/path-routes';
import {Roles} from '../models/constants/roles';

export interface User {
  username: string;
  password: string;
  role: string;
}

export interface MessageServer {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private httpClient: HttpClient,
              private tokenService: TokenService,
              private router: Router,
              private authService: AuthService) {
  }

  public login(credentials: Credentials) {
    this.authService.getResponseHeaders(credentials)
      .subscribe((res: HttpResponse<any>) => {
        this.tokenService.saveToken(res.headers.get('authorization'));
        this.authService.getRole(credentials.username).subscribe(
          value => {
            this.tokenService.saveRole(value.content);
            this.router.navigate([PathRoutes.HOME_ROUTE]).then();
          }
        );
      });
  }

  logout(): void {
    this.tokenService.deleteToken();
    this.tokenService.deleteRole();
    this.router.navigate([PathRoutes.HOME_ROUTE]).then();
  }

  registrationUser(user: User, action: string): Observable<ResponseFrom> {

    if (action === LabelRoutes.ADD_ACCOUNT_LABEL) {
      return this.authService.addUser(user);
    }
    if (action === LabelRoutes.UPDATE_ACCOUNT_LABEL) {
      return this.authService.updateUser(user);
    }
    if (action === LabelRoutes.REMOVE_ACCOUNT_LABEL) {
      return this.authService.removeUser(user.username);
    }
    if (action === LabelRoutes.GET_ACCOUNT_LABEL) {
      return this.authService.getUser(user.username);
    }
  }

  isAuth(): boolean {
    return this.tokenService.isLoggedIn();
  }

  isAdmin(): boolean {
    return this.tokenService.getRole() === Roles.ROLE_ADMIN;
  }

  isClerk(): boolean {
    return this.tokenService.getRole() === Roles.ROLE_CLERC;
  }

  isDriver(): boolean {
    return this.tokenService.getRole() === Roles.ROLE_DRIVER;
  }

  isManager(): boolean {
    return this.tokenService.getRole() === Roles.ROLE_MANAGER;
  }

  isStatist() {
    return this.tokenService.getRole() === Roles.ROLE_STATIST;
  }

}


