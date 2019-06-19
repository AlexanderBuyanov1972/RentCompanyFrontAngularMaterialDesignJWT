import { Injectable } from '@angular/core';
import {AbstractSecurityService, User} from './abstract-security.service';
import {Observable} from 'rxjs';
import {ResponseFrom} from '../models/response-from';

@Injectable({
  providedIn: 'root'
})
export class SecurityService implements AbstractSecurityService {

  constructor() { }

  addUser(user: User): Observable<ResponseFrom> {

    return undefined;
  }

  login(user: User): Observable<ResponseFrom> {
    return undefined;
  }

  loginWithService(methodLogin: string) {
  }

  logout(email: User): Observable<ResponseFrom> {
    return undefined;
  }

  logoutWithService() {
  }

  removeUser(email: string): Observable<ResponseFrom> {
    return undefined;
  }
}
