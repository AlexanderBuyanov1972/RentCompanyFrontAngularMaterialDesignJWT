import {Component} from '@angular/core';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';
import {Car} from '../../../models/car';

@Component({
  selector: 'app-item-get-car',
  templateUrl: './item-get-car.component.html',
  styleUrls: ['./item-get-car.component.css']
})
export class ItemGetCarComponent {
  car: Car;
  regNumberCar = '';

  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) {
  }

  submitRegNumber() {
    this.serviceRentCompany.getCar(this.regNumberCar).subscribe(
      value => {
        this.car = value.content;
        this.regNumberCar = '';
      }
    );
  }

  back() {
    this.router.navigate(['/']);
  }
}
