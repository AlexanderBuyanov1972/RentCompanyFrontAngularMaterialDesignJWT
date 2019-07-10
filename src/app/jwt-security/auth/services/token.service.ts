import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Credentials} from '../credentials';
import {environment} from '../../../../environments/environment';
import {PathHttps} from '../../../models/constants/path-https';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  observe: 'response' as 'response'
};
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) {
  }

  public getResponseHeaders(credentials: Credentials) {
    return this.http.post(API_URL + PathHttps.LOGIN, credentials, httpOptions);
  }

  public logout() {
    return this.http.get(API_URL + PathHttps.LOGOUT, {responseType: 'text'});
  }
}
