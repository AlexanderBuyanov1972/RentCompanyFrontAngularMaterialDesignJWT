import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'RentCompanyFrontAngular';

  constructor(private authService: AuthService) {
  }

  ngOnDestroy(): void {
    // this.authService.logout();
  }

  ngOnInit(): void {
  }


}
