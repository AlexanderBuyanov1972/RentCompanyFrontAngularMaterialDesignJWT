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

  abstract registrationUser(user: User, action: string): Observable<ResponseFrom>;

  abstract login(user: User);

  abstract logout();

  abstract isAuth(): boolean;

  abstract isAdmin(): boolean;

  abstract isClerk(): boolean;

  abstract isManager(): boolean;

  abstract isDriver(): boolean;

  abstract isTechnician(): boolean;

  abstract isStatist(): boolean;




}
