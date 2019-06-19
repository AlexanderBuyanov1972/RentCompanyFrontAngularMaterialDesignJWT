import { Component} from '@angular/core';
import {AbstractAPIRentCompany} from '../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

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

  removeCar(formCar: NgForm) {
    this.serviceRentCompany.removeCar(formCar.value.regNumber).subscribe(
      value => {
        this.messageResponse = value.message;
        formCar.resetForm();
      },
      error => {
        this.messageResponse = 'car is not removed';
      }
    );
  }
}
