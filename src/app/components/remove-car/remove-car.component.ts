import { Component} from '@angular/core';
import {AbstractAPIRentCompany} from '../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';

@Component({
  selector: 'app-remove-car',
  templateUrl: './remove-car.component.html',
  styleUrls: ['./remove-car.component.css']
})

export class RemoveCarComponent {
  regNumberCar = '';
  messageResponse = '';

  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) { }

  back() {
    this.router.navigate(['/']);
  }

  removeCar() {
    this.serviceRentCompany.removeCar(this.regNumberCar).subscribe(
      value => {
        this.messageResponse = value.message;
        this.regNumberCar = '';
      },
      error => {
        this.messageResponse = 'car is not removed';
      }
    );
  }
}
