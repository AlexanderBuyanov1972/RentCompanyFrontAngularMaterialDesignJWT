import {Component, OnInit} from '@angular/core';
import {AbstractRegistration} from '../../services/abstract-registration';
import {AbstractAuthService} from '../../services/abstract-auth-service';
import {Router} from '@angular/router';
import {PathRoutes} from '../../models/constants/path-routes';
import {Patterns} from '../../models/constants/patterns';
import {ValidationErrors} from '../../models/constants/validation-errors';


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

  constructor(private serviceSecurity: AbstractRegistration,
              private authService: AbstractAuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.login('google');
    this.router.navigate([PathRoutes.HOME_ROUTE]).then();
  }

  loginWithGitHub() {
    this.authService.login('github');
    this.router.navigate([PathRoutes.HOME_ROUTE]).then();
  }

  loginWithFacebook() {
    this.authService.login('facebook');
    this.router.navigate([PathRoutes.HOME_ROUTE]).then();
  }

  loginWithEmailAndPassword() {
    this.authService.login('email_password', this.emailUser, this.passwordUser);
    this.router.navigate([PathRoutes.HOME_ROUTE]).then();
  }
}
