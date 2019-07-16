import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Credentials} from '../models/credentials';
import {PathHttps} from '../models/constants/path-https';
import {ResponseFrom} from '../models/response-from';
import {Observable} from 'rxjs';
import {User} from './registration.service';
import {TokenService} from './token.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  observe: 'response' as 'response'
};

const urlHeroku = 'https://rentcarscompany.herokuapp.com';
const urlLocalHost = 'http://localhost:8080';
const API_URL = urlLocalHost;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = this.tokenService.getToken();
  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.token,
      'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'
    })
  };

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService) {
  }

// ***************************************************************************************************************************
  public getResponseHeaders(credentials: Credentials) {
    return this.httpClient.post(API_URL + PathHttps.LOGIN, credentials, httpOptions);
  }

  public logout() {
    return this.tokenService.deleteToken();
  }

// ***************************************************************************************************************************

  getRole(username: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(API_URL + PathHttps.GET_ROLE + '?username=' + encodeURIComponent(username));
  }

  addUser(user: User): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(API_URL + PathHttps.ACCOUNT, user, this.httpOptions);
  }

  updateUser(user: User): Observable<ResponseFrom> {
    return this.httpClient.put<ResponseFrom>(API_URL + PathHttps.ACCOUNT, user, this.httpOptions);
  }

  removeUser(username: string): Observable<ResponseFrom> {
    return this.httpClient.delete<ResponseFrom>(API_URL + PathHttps.ACCOUNT + '?username=' +
      encodeURIComponent(username), this.httpOptions);
  }

  getUser(username: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(API_URL + PathHttps.ACCOUNT + '?username=' + encodeURIComponent(username), this.httpOptions);
  }
}
