import {ResponseFrom} from '../models/response-from';
import {Observable} from 'rxjs';

export interface Account {
  email: string;
  password: string;
  roles: string[];
}

export abstract class AbstractRegistration {

  abstract addAccount(account: Account): Observable<ResponseFrom>;

  abstract removeAccount(email: string): Observable<ResponseFrom>;

  abstract updatePassword(account: Account): Observable<ResponseFrom>;

  abstract addRole(account: Account): Observable<ResponseFrom>;

  abstract removeRole(account: Account): Observable<ResponseFrom>;

}
