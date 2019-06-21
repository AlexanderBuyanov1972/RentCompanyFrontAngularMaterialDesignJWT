import {Component} from '@angular/core';
import {Driver} from '../../../models/driver';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';

@Component({
  selector: 'app-form-driver',
  templateUrl: './form-driver.component.html',
  styleUrls: ['./form-driver.component.css']
})
export class FormDriverComponent {
  constructor(private serviceRentCompany: AbstractRentCompany) {
  }

  saveDriver(formDriver: any) {
    this.serviceRentCompany.addDriver(formDriver.value as Driver).subscribe(
      value => formDriver.reset(),
      error => console.log('----------ERROR---------------' + error
      ));
  }
}
