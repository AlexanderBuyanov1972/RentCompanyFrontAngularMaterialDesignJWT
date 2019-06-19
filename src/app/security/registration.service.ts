import {Injectable} from '@angular/core';
import {AbstractRegistration, Account} from './abstract-registration';
import {Observable} from 'rxjs';
import {ResponseFrom} from '../models/response-from';
import {HttpClient} from '@angular/common/http';

const url = 'https://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService implements AbstractRegistration {

  constructor(private httpClient: HttpClient) {
  }

  addRole(account: Account): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + '/role', account);
  }

  addAccount(account: Account): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + '/account', account);
  }

  removeRole(account: Account): Observable<ResponseFrom> {
    return this.httpClient.put<ResponseFrom>(url + '/role', account);
  }

  removeAccount(email: string): Observable<ResponseFrom> {
    return this.httpClient.delete<ResponseFrom>(url + '/account/' + email);
  }

  updatePassword(account: Account): Observable<ResponseFrom> {
    return this.httpClient.put<ResponseFrom>(url + '/account', account);
  }

}
