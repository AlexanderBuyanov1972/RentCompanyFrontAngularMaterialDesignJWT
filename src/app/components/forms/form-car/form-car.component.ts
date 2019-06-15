import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Car} from '../../../models/car';
import {State} from '../../../models/State';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';

@Component({
  selector: 'app-form-car',
  templateUrl: './form-car.component.html',
  styleUrls: ['./form-car.component.css']
})
export class FormCarComponent {
  constructor(private serviceRentCompany: AbstractAPIRentCompany) {
  }

  saveCar(formCar: NgForm) {
    const car = formCar.value as Car;
    car.inUse = false;
    car.flRemoved = false;
    car.state = State.EXCELLENT;
    this.serviceRentCompany.addCar(car).subscribe(
      value => formCar.reset(),
      error => console.log('--------------ERROR!!!!!!!!!!!!!!------->' + error)
    );
  }
}
