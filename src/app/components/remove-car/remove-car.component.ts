import { Component} from '@angular/core';
import {AbstractRentCompany} from '../../services/abstract-rent-company';
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

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) { }

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
