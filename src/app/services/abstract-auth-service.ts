import {Observable} from 'rxjs';
import {ResponseFrom} from '../models/response-from';

export interface User {
  username: string;
  password: string;
}

export abstract class AbstractAuthService {
  abstract login(user: User);

  abstract logout(): boolean;

  abstract isAuth(): boolean;

  abstract isAdmin(): boolean;

  abstract isClerk(): boolean;

  abstract isManager(): boolean;

  abstract isDriver(): boolean;

  abstract isTechnician(): boolean;

  abstract isStatist(): boolean;
}
