import {Injectable} from '@angular/core';
import {AbstractRegistration, MessageServer, User} from './abstract-registration';
import {Observable} from 'rxjs';
import {ResponseFrom} from '../models/response-from';
import {HttpClient} from '@angular/common/http';
import {PathHttps} from '../models/constants/path-https';
import {LabelRoutes} from '../models/constants/label-routes';
import {getToken} from 'codelyzer/angular/styles/cssLexer';

const urlHeroku = 'https://rentcarscompany.herokuapp.com';
const urlLocalHost = 'http://localhost:8080';
const url = urlLocalHost;


@Injectable({
  providedIn: 'root'
})
export class RegistrationService implements AbstractRegistration {
  role = '';
  token = '';

  constructor(private httpClient: HttpClient) {
  }


  shutDown(): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>(url + '/actuator/shutdown', {});
  }

  registrationUser(user: User, action: string): Observable<ResponseFrom> {

    if (action === LabelRoutes.ADD_ACCOUNT_LABEL) {
      return this.httpClient.post<ResponseFrom>(url + PathHttps.ACCOUNT, user);
    }
    if (action === LabelRoutes.UPDATE_ACCOUNT_LABEL) {
      return this.httpClient.put<ResponseFrom>(url + PathHttps.ACCOUNT, user);
    }
    if (action === LabelRoutes.REMOVE_ACCOUNT_LABEL) {
      return this.httpClient.delete<ResponseFrom>(url + PathHttps.ACCOUNT + '?username=' + encodeURIComponent(user.username));
    }
    if (action === LabelRoutes.GET_ACCOUNT_LABEL) {
      return this.httpClient.get<ResponseFrom>(url + PathHttps.ACCOUNT + '?username=' + encodeURIComponent(user.username));
    }
  }

  // ----------------------------------------------login----------------------------------------------------------
  login(user: User) {
    this.httpClient.post<ResponseFrom>(url + PathHttps.LOGIN, user).subscribe(
      value => {
        this.role = value.content;
        // -----------------------нужно получить токен--------------------------


        // -------------------------------------------------------------------
        localStorage.setItem('token', this.token);
      }
    );
  }

// ---------------------------------------logout-------------------------------------------------------
  logout(): void {
    localStorage.removeItem('token');
  }

// -----------------------------------------------------------------------------------------------------
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
