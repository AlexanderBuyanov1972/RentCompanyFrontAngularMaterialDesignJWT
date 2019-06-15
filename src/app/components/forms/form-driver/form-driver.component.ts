import {Component} from '@angular/core';
import {Driver} from '../../../models/driver';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';

@Component({
  selector: 'app-form-driver',
  templateUrl: './form-driver.component.html',
  styleUrls: ['./form-driver.component.css']
})
export class FormDriverComponent {
  constructor(private serviceRentCompany: AbstractAPIRentCompany) {
  }

  saveDriver(formDriver: any) {
    this.serviceRentCompany.addDriver(formDriver.value as Driver).subscribe(
      value => formDriver.reset(),
      error => console.log('----------ERROR---------------' + error
      ));
  }
}
