import {Component, OnDestroy, OnInit} from '@angular/core';
import {Driver} from '../../../models/driver';
import {AbstractRentCompany} from '../../../services/rent_company/abstract-rent-company';
import {Patterns} from '../../../models/constants/patterns';
import {ValidationErrors} from '../../../models/constants/validation-errors';
import {Messages} from '../../../models/constants/messages';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-driver',
  templateUrl: './form-driver.component.html',
  styleUrls: ['./form-driver.component.css']
})
export class FormDriverComponent implements OnInit, OnDestroy {
  licenseIdDriver = Patterns.LICENSE_ID;
  nameUser = Patterns.NAME_USER;
  year = Patterns.YEAR;
  phoneNumber = Patterns.PHONE_NUMBER;
  licenseIdValid = ValidationErrors.LICENSE_ID_VALID;
  licenseIdRequired = ValidationErrors.LICENSE_ID_REQUIRED;
  nameDriverValid = ValidationErrors.DRIVER_NAME_VALID;
  nameDriverRequired = ValidationErrors.DRIVER_NAME_REQUIRED;
  birthYearValid = ValidationErrors.BIRTH_YEAR_VALID;
  birthYearRequired = ValidationErrors.BIRTH_YEAR_REQUIRED;
  birthYearLess = ValidationErrors.DRIVER_AGE_LESS;
  phoneNumberValid = ValidationErrors.PHONE_NUMBER_VALID;
  phoneNumberRequired = ValidationErrors.PHONE_NUMBER_REQUIRED;
  messageResponse = '';

  constructor(private serviceRentCompany: AbstractRentCompany) {
  }

  saveDriver(formDriver: NgForm) {
    const subscription = this.serviceRentCompany.addDriver(formDriver.value as Driver).subscribe(
      value => {
        this.messageResponse = value.message;
        if (this.messageResponse === Messages.OK) {
          formDriver.reset();
        }
        subscription.unsubscribe();
      }
    );
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
