import {Injectable} from '@angular/core';
import {AbstractAuthService, User} from './abstract-auth-service';
import {ResponseFrom} from '../models/response-from';
import {HttpClient} from '@angular/common/http';
import {PathHttps} from '../models/constants/path-https';

const urlHeroku = 'https://rentcarscompany.herokuapp.com';
const urlLocalHost = 'http://localhost:8080';
const url = urlLocalHost;

@Injectable({
  providedIn: 'root'
})

export class AuthService implements AbstractAuthService {
  role = '';

  constructor(private http: HttpClient) {
  }

  login(user: User) {
    this.http.post<ResponseFrom>(url + PathHttps.LOGIN, user).subscribe(
      value => {
        this.role = value.content;
        if (this.isAuth() && this.isAuth() ) {
          return;
        }
        if (this.isAdmin() && this.isAuth() ) {
           return;
        }
        if (this.isClerk() && this.isAuth() ) {
          return;
        }
        if (this.isManager() && this.isAuth() ) {
          return;
        }
        if (this.isStatist() && this.isAuth() ) {
          return;
        }
        if (this.isDriver() && this.isAuth() ) {
          return;
        }
        if (this.isTechnician() && this.isAuth() ) {
          return;
        }
        if (this.isAuth() ) {
          return;
        }

      }
    );
  }

  logout() {
    return false;
  }

  isAuth(): boolean {
    return this.role !== '' || this.role === null;
  }

  isAdmin(): boolean {
    return this.role === 'ROLE_ADMIN';
  }

  isClerk(): boolean {
    return this.role === 'ROLE_CLERK';

  }

  isDriver(): boolean {
    return this.role === 'ROLE_DRIVER';
  }

  isManager(): boolean {
    return this.role === 'ROLE_MANAGER';
  }

  isStatist(): boolean {
    return this.role === 'ROLE_STATIST';
  }

  isTechnician(): boolean {
    return this.role === 'ROLE_TECHNICIAN';
  }
}
