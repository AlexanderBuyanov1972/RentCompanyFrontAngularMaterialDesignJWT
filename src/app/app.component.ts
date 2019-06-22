import {Component, OnDestroy} from '@angular/core';
import {AbstractAuthService} from './services/abstract-auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'RentCompanyFrontAngular';

  constructor(private auth: AbstractAuthService) {
  }

  ngOnDestroy(): void {
    this.auth.logout();
  }
}
