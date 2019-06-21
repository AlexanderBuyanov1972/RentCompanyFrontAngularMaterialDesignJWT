import {ResponseFrom} from '../models/response-from';
import {Observable} from 'rxjs';

export interface User {
  username: string;
  password: string;
  roles: string[];
}

export abstract class AbstractRegistration {

  abstract addAccount(user: User): Observable<ResponseFrom>;

  abstract removeAccount(username: string): Observable<ResponseFrom>;

  abstract updatePassword(user: User): Observable<ResponseFrom>;

  abstract addRole(user: User): Observable<ResponseFrom>;

  abstract removeRole(user: User): Observable<ResponseFrom>;

  abstract logout(user: User): Observable<ResponseFrom>;

  abstract login(user: User): Observable<ResponseFrom>;
}
