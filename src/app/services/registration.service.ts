import {Injectable} from '@angular/core';
import {AbstractRegistration, MessageServer, User} from './abstract-registration';
import {Observable} from 'rxjs';
import {ResponseFrom} from '../models/response-from';
import {HttpClient} from '@angular/common/http';
import {PathHttps} from '../models/constants/path-https';
import {LabelRoutes} from '../models/constants/label-routes';

const urlHeroku = 'https://rentcarscompany.herokuapp.com';
const urlLocalHost = 'http://localhost:8080';
const url = urlLocalHost;



@Injectable({
  providedIn: 'root'
})
export class RegistrationService implements AbstractRegistration {

  constructor(private httpClient: HttpClient) {
  }


  shutDown(): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>(url + '/actuator/shutdown', {});
  }

  registration(user: User, action: string): Observable<ResponseFrom> {

    if (action === LabelRoutes.ADD_ACCOUNT_LABEL) {
      return this.addAccount(user);
    }
    if (action === LabelRoutes.UPDATE_ACCOUNT_LABEL) {
      return this.updateAccount(user);
    }
    if (action === LabelRoutes.REMOVE_ACCOUNT_LABEL) {
      return this.removeAccount(user);
    }
    if (action === LabelRoutes.GET_ACCOUNT_LABEL) {
      return this.getAccount(user);
    }
  }

  addAccount(user: User): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + PathHttps.ACCOUNT, user);
  }

  updateAccount(user: User): Observable<ResponseFrom> {
    return this.httpClient.put<ResponseFrom>(url + PathHttps.ACCOUNT, user);
  }

  removeAccount(user: User): Observable<ResponseFrom> {
    return this.httpClient.delete<ResponseFrom>(url + PathHttps.ACCOUNT + '?username=' + encodeURIComponent(user.username));
  }

  getAccount(user: User): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.ACCOUNT + '?username=' + encodeURIComponent(user.username));
  }


}
