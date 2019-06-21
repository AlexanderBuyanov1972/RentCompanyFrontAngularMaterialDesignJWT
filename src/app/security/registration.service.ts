import {Injectable} from '@angular/core';
import {AbstractRegistration, User} from './abstract-registration';
import {Observable} from 'rxjs';
import {ResponseFrom} from '../models/response-from';
import {HttpClient} from '@angular/common/http';

const urlHeroku = 'https://rentcarscompany.herokuapp.com';
const urlLocalHost = 'http://localhost:8080';
const url = urlLocalHost;

@Injectable({
  providedIn: 'root'
})
export class RegistrationService implements AbstractRegistration {

  constructor(private httpClient: HttpClient) {
  }

  addRole(user: User): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + '/role', user);
  }

  addAccount(user: User): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + '/account', user);
  }

  removeRole(user: User): Observable<ResponseFrom> {
    return this.httpClient.put<ResponseFrom>(url + '/role', user);
  }

  removeAccount(username: string): Observable<ResponseFrom> {
    return this.httpClient.delete<ResponseFrom>(url + '/account/' + username);
  }

  updatePassword(user: User): Observable<ResponseFrom> {
    return this.httpClient.put<ResponseFrom>(url + '/account', user);
  }

  login(user: User): Observable<ResponseFrom> {
    return undefined;
  }

  logout(user: User): Observable<ResponseFrom> {
    return undefined;
  }

}
