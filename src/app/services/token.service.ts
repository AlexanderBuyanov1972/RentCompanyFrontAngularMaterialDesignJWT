import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  static readonly TOKEN_STORAGE_KEY = 'token';
  static readonly ROLE_STORAGE_KEY = 'role';

  constructor() {
  }
// ****************************TOKEN*******************************************
  public saveToken(token: string) {
    localStorage.setItem(TokenService.TOKEN_STORAGE_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TokenService.TOKEN_STORAGE_KEY);
  }

  public deleteToken(): void {
    localStorage.removeItem(TokenService.TOKEN_STORAGE_KEY);
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

// ***************************ROLE********************************************
  public saveRole(role: string) {
    localStorage.setItem(TokenService.ROLE_STORAGE_KEY, role);
  }

  public getRole(): string {
    return localStorage.getItem(TokenService.ROLE_STORAGE_KEY);
  }

  public deleteRole(): void {
    localStorage.removeItem(TokenService.ROLE_STORAGE_KEY);
  }
  public isRoledIn(): boolean {
    return !!this.getRole();
}
}



