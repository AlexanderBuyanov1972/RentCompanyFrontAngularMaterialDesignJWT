import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractRegistration, User} from '../../services/abstract-registration';
import {Patterns} from '../../models/constants/patterns';
import {ValidationErrors} from '../../models/constants/validation-errors';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit, OnDestroy {
  emailPattern = Patterns.EMAIL;
  passwordPattern = Patterns.PASSWORD;
  rolePattern = Patterns.ROLE;
  emailValid = ValidationErrors.EMAIL_VALID;
  emailRequired = ValidationErrors.EMAIL_REQUIRED;
  roleValid = ValidationErrors.ROLE_VALID;
  roleRequired = ValidationErrors.ROLE_REQUIRED;
  passwordValid = ValidationErrors.PASSWORD_VALID;
  passwordRequired = ValidationErrors.PASSWORD_REQUIRED;
  messageResponse = '';

  constructor(private serviceSecurity: AbstractRegistration) {
  }

  ngOnInit() { }

  registration(formUser: NgForm) {
    const subscription = this.serviceSecurity.addAccount(formUser.value as User).subscribe(
      value => {
        formUser.resetForm();
        console.log(value.message);
        this.messageResponse = value.message;
        subscription.unsubscribe();
      }
    );
  }

  ngOnDestroy(): void { }
}
