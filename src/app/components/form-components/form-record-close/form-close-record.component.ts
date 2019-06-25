import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {RentRecord} from '../../../models/rent-record';
import {Patterns} from '../../../models/constants/patterns';
import {ValidationErrors} from '../../../models/constants/validation-errors';
import {Messages} from '../../../models/constants/messages';

@Component({
  selector: 'app-form-close-record',
  templateUrl: './form-close-record.component.html',
  styleUrls: ['./form-close-record.component.css']
})
export class FormCloseRecordComponent implements OnInit, OnDestroy {
  constructor(private serviceRC: AbstractRentCompany) {
  }

  licenseIdPattern = Patterns.LICENSE_ID;
  regNumberPattern = Patterns.REG_NUMBER;
  gasTankPercentPattern = Patterns.GAS_TANK_PERCENT;
  damagesPattern = Patterns.DAMAGES_PERCENT;
  licenseIdValid = ValidationErrors.LICENSE_ID_VALID;
  licenseIdRequired = ValidationErrors.LICENSE_ID_REQUIRED;
  regNumberValid = ValidationErrors.REG_NUMBER_VALID;
  regNumberRequired = ValidationErrors.REG_NUMBER_REQUIRED;
  gasTankPercentValid = ValidationErrors.GAS_TANK_PERCENT_VALID;
  gasTankPercentRequired = ValidationErrors.GAS_TANK_PERCENT_REQUIRED;
  damagesValid = ValidationErrors.DAMAGES_VALID;
  damagesRequired = ValidationErrors.DAMAGES_REQUIRED;
  messageResponse = '';

  private static getMonth() {
    const d = new Date().getMonth() + 1;
    return d < 10 ? '0' + d : '' + d;
  }

  saveReturnRecord(formReturnRecord: NgForm) {
    const record = formReturnRecord.value as RentRecord;
    const date = new Date();
    record.returnDate = date.getFullYear() + '-' +
      FormCloseRecordComponent.getMonth() + '-' + date.getDate();
    const subscription = this.serviceRC.returnCar(record).subscribe(
      value => {
        this.messageResponse = value.message;
        if (this.messageResponse === Messages.OK) {
          formReturnRecord.reset();
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
