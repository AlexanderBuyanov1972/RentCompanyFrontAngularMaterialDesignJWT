import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {RentRecord} from '../../../models/rent-record';

@Component({
  selector: 'app-form-open-record',
  templateUrl: './form-open-record.component.html',
  styleUrls: ['./form-open-record.component.css']
})
export class FormOpenRecordComponent {
  constructor(private serviceRentCompany: AbstractAPIRentCompany) {
  }

  saveRentRecord(formRentRecord: NgForm) {
    const record = formRentRecord.value as RentRecord;
    record.cost = 0;
    record.damages = 0;
    record.gasTankPercent = 0;
    record.returnDate = '';
    this.serviceRentCompany.rentCar(record).subscribe(
      value => formRentRecord.resetForm(),
      error => console.log('----------------------OШИБКА!!!-----------------------' + error.message)
    );
  }
}
