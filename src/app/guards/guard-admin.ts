import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class GuardAdmin implements CanActivate {
  canActivate(): Observable<boolean> {
    return undefined;
  }

}
