import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ResponseFrom} from '../models/response-from';

export interface User {
  email: string;
  position: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractSecurityService {

  abstract addUser(user: User): Observable<ResponseFrom>;

  abstract removeUser(email: string): Observable<ResponseFrom>;

  abstract login(user: User): Observable<ResponseFrom>;

  abstract logout(email: User): Observable<ResponseFrom>;

  abstract loginWithService(methodLogin: string);

  abstract logoutWithService();


}
