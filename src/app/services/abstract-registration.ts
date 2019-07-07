import {ResponseFrom} from '../models/response-from';
import {Observable} from 'rxjs';

export interface User {
  username: string;
  password: string;
  role: string;
}

export interface MessageServer {
  message: string;
}

export abstract class AbstractRegistration {

  abstract shutDown(): Observable<MessageServer> ;

  abstract registration(user: User, action: string): Observable<ResponseFrom>;

  abstract addAccount(user: User): Observable<ResponseFrom>;

  abstract removeAccount(user: User): Observable<ResponseFrom>;

  abstract updateAccount(user: User): Observable<ResponseFrom>;

  abstract getAccount(user: User): Observable<ResponseFrom>;


}
