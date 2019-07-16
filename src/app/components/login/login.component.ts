import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Patterns} from '../../models/constants/patterns';
import {ValidationErrors} from '../../models/constants/validation-errors';
import {Credentials} from '../../models/credentials';
import {RegistrationService} from '../../services/registration.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailUser = '';
  passwordUser = '';

  emailPattern = Patterns.EMAIL;
  passwordPattern = Patterns.PASSWORD;

  emailValid = ValidationErrors.EMAIL_VALID;
  emailRequired = ValidationErrors.EMAIL_REQUIRED;
  passwordValid = ValidationErrors.PASSWORD_VALID;
  passwordRequired = ValidationErrors.PASSWORD_REQUIRED;

  constructor(private registrationService: RegistrationService,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  public login(): void {
    this.registrationService.login(new Credentials(this.emailUser, this.passwordUser, ''));
  }

}

