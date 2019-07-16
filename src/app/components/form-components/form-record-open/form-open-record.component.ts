import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractRentCompany} from '../../../services/rent_company/abstract-rent-company';
import {RentRecord} from '../../../models/rent-record';
import {Patterns} from '../../../models/constants/patterns';
import {ValidationErrors} from '../../../models/constants/validation-errors';
import {Messages} from '../../../models/constants/messages';

@Component({
  selector: 'app-form-open-record',
  templateUrl: './form-open-record.component.html',
  styleUrls: ['./form-open-record.component.css']
})
export class FormOpenRecordComponent implements OnInit, OnDestroy {

  constructor(private serviceRentCompany: AbstractRentCompany) {
  }

  licenseIdPattern = Patterns.LICENSE_ID;
  regNumberPattern = Patterns.REG_NUMBER;
  rentDaysPattern = Patterns.THREE_DIGITS;
  licenseIdValid = ValidationErrors.LICENSE_ID_VALID;
  licenseIdRequired = ValidationErrors.LICENSE_ID_REQUIRED;
  regNumberValid = ValidationErrors.REG_NUMBER_VALID;
  regNumberRequired = ValidationErrors.REG_NUMBER_REQUIRED;
  rentDaysValid = ValidationErrors.RENT_DAYS_VALID;
  rentDaysRequired = ValidationErrors.RENT_DAYS_REQUIRED;
  messageResponse = '';

  private static getMonth() {
    const d = new Date().getMonth() + 1;
    return d < 10 ? '0' + d : '' + d;
  }

  saveRentRecord(formRentRecord: NgForm) {
    const record = formRentRecord.value as RentRecord;
    const date = new Date();
    record.rentDate = date.getFullYear() + '-' +
      FormOpenRecordComponent.getMonth() + '-' + date.getDate();

    record.cost = 0;
    record.damages = 0;
    record.gasTankPercent = 0;
    record.returnDate = '';
    const subscription = this.serviceRentCompany.rentCar(record).subscribe(
      value => {
        this.messageResponse = value.message;
        if (this.messageResponse === Messages.OK) {
          formRentRecord.reset();
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
