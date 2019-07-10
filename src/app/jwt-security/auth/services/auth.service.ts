import { Injectable } from '@angular/core';

import { TokenService } from './token.service'
import { Credentials } from '../credentials';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static readonly TOKEN_STORAGE_KEY = 'token';
  redirectToUrl = '/cookies';

  constructor(private router: Router, private tokenService: TokenService) { }

  public login(credentials: Credentials): void {
    console.log('вошли в логин token.service');
    this.tokenService.getResponseHeaders(credentials)
      .subscribe((res: HttpResponse<any>) => {
        console.log('получили результат и печатам его' + res);
        this.saveToken(res.headers.get('authorization'));
        console.log('сщхранили токен' + res.headers.get('authorization'));
        this.router.navigate([this.redirectToUrl]).then();
      });
  }

  private saveToken(token: string) {
    localStorage.setItem(AuthService.TOKEN_STORAGE_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(AuthService.TOKEN_STORAGE_KEY);
  }

  public logout(): void {
    this.tokenService.logout()
      .subscribe(() => {
        localStorage.removeItem(AuthService.TOKEN_STORAGE_KEY);
      });
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
