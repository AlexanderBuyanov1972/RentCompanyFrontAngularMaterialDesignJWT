import {Component, OnInit} from '@angular/core';
import {AbstractRegistration, User} from '../../services/abstract-registration';
import {Router} from '@angular/router';
import {Patterns} from '../../models/constants/patterns';
import {ValidationErrors} from '../../models/constants/validation-errors';
import {NgForm} from '@angular/forms';
import {PathRoutes} from '../../models/constants/path-routes';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailUser: string;
  passwordUser: string;
  emailPattern = Patterns.EMAIL;
  passwordPattern = Patterns.PASSWORD;
  emailValid = ValidationErrors.EMAIL_VALID;
  emailRequired = ValidationErrors.EMAIL_REQUIRED;
  passwordValid = ValidationErrors.PASSWORD_VALID;
  passwordRequired = ValidationErrors.PASSWORD_REQUIRED;

  constructor(private registrationService: AbstractRegistration, private router: Router) {
  }

  ngOnInit() {
  }


  sendToServer(form: NgForm) {
    this.registrationService.login(form.value as User);
    this.router.navigate([PathRoutes.HOME_ROUTE]).then();
  }
}
