export interface User {
  username: string;
  uid: string;
  email: string;
  }

export abstract class AbstractAuthService {
  abstract isAuth(): boolean;
  abstract isAdmin(): boolean;
  abstract isClerk(): boolean;
  abstract isManager(): boolean;
  abstract isDriver(): boolean;
  abstract isStatist(): boolean;
  abstract isTechnician(): boolean;
  abstract isEmail(email: string): boolean;


  abstract getUser(): User;
  abstract login(loginMethod: string, email?: string, password?: string);
  abstract logout();
}
