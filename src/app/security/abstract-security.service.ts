import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ResponseFrom} from '../models/response-from';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractSecurityService {
  abstract addUser(user: User): Observable<ResponseFrom>;
  abstract getUser(email: string): Observable<ResponseFrom>;
  abstract removeUser(email: string): Observable<ResponseFrom>;

  abstract addLogin(user: User): Observable<ResponseFrom>;
  abstract getLogin(email: string): Observable<ResponseFrom>;
  abstract removeLogin(user: User): Observable<ResponseFrom>;

}
