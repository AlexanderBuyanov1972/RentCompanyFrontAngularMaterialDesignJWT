import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {RentRecord} from '../../../models/rent-record';

@Component({
  selector: 'app-form-close-record',
  templateUrl: './form-close-record.component.html',
  styleUrls: ['./form-close-record.component.css']
})
export class FormCloseRecordComponent {

  constructor(private serviceRC: AbstractRentCompany) {
  }

  saveReturnRecord(formReturnRecord: NgForm) {
    this.serviceRC.returnCar(formReturnRecord.value as RentRecord).subscribe(
      value => formReturnRecord.reset(),
      error => console.log('--------------ERROR!!!!!!!!!!!!!!------->' + error)
    );
  }
}
