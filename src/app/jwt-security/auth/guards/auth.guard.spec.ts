import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthGuard', () => {
  let injector: TestBed;
  let authService: AuthService
  let guard: AuthGuard;
  const routeMock: any = { snapshot: {}};
  const routeStateMock: any = { snapshot: {}, url: '/cookies'};
  const routerMock = {navigate: jasmine.createSpy('navigate')}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard, { provide: Router, useValue: routerMock },
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    injector = getTestBed();
    authService = injector.get(AuthService);
    guard = injector.get(AuthGuard);
  });

  // tslint:disable-next-line:no-shadowed-variable
  it('should be created', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should redirect an unauthenticated user to the login route', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should allow the authenticated user to access app', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  });
});
