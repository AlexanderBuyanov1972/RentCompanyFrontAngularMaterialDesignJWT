import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Patterns} from '../../models/constants/patterns';
import {ValidationErrors} from '../../models/constants/validation-errors';
import {ActivatedRoute} from '@angular/router';
import {LabelRoutes} from '../../models/constants/label-routes';
import {RegistrationService, User} from '../../services/registration.service';
import {SelectionService} from '../../services/selection.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit, OnDestroy {
  @Output()
  emailPattern = Patterns.EMAIL;
  passwordPattern = Patterns.PASSWORD;
  emailValid = ValidationErrors.EMAIL_VALID;
  emailRequired = ValidationErrors.EMAIL_REQUIRED;
  roleRequired = ValidationErrors.ROLE_REQUIRED;
  passwordValid = ValidationErrors.PASSWORD_VALID;
  passwordRequired = ValidationErrors.PASSWORD_REQUIRED;
  messageResponse = '';
  private action: string;
  private addAccount = LabelRoutes.ADD_ACCOUNT_LABEL;
  private updateAccount = LabelRoutes.UPDATE_ACCOUNT_LABEL;
  private removeAccount = LabelRoutes.REMOVE_ACCOUNT_LABEL;
  private getAccount = LabelRoutes.GET_ACCOUNT_LABEL;
  emailUser = '';
  roleUser = '';
  passwordUser = '';
  nameOperation: any;
  valueRole = '';
  roles: string[] = [];

  constructor(private registrationService: RegistrationService,
              private route: ActivatedRoute, private selectionService: SelectionService) {
    this.roles = this.selectionService.roles;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => {
        this.action = param.get('action');
        this.messageResponse = '';
      }
    );
  }


  registration(formUser: NgForm) {
    const subscription = this.registrationService.registrationUser(formUser.value as User, this.action).subscribe(
      value => {
        if (value.content !== '') {
          const user = value.content as User;
          this.emailUser = user.username;
          this.roleUser = user.role;
          this.passwordUser = user.password;
        } else {
          formUser.resetForm();
        }
        this.messageResponse = value.message;
        subscription.unsubscribe();
      }
    );
  }

  ngOnDestroy(): void {
  }

  isAddAccount(): boolean {
    if (this.action === this.addAccount) {
      this.nameOperation = LabelRoutes.ADD_ACCOUNT_LABEL;
      return true;
    }
    return false;
  }

  isUpdateAccount(): boolean {
    if (this.action === this.updateAccount) {
      this.nameOperation = LabelRoutes.UPDATE_ACCOUNT_LABEL;
      return true;
    }
    return false;
  }

  isRemoveAccount(): boolean {
    if (this.action === this.removeAccount) {
      this.nameOperation = LabelRoutes.REMOVE_ACCOUNT_LABEL;
      return true;
    }
    return false;
  }

  isGetAccount(): boolean {
    if (this.action === this.getAccount) {
      this.nameOperation = LabelRoutes.GET_ACCOUNT_LABEL;
      return true;
    }
    return false;
  }

  reset(formUser: NgForm) {
    formUser.resetForm();
  }
}
