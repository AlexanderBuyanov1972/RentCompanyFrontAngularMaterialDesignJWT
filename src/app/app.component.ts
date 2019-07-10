import {Component, OnDestroy} from '@angular/core';
import {AbstractRegistration} from './services/abstract-registration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'RentCompanyFrontAngular';

  constructor(private registrationService: AbstractRegistration) {
  }

  ngOnDestroy(): void {
    this.registrationService.logout();
  }
}
