import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractRentCompany} from '../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Patterns} from '../../models/constants/patterns';
import {ValidationErrors} from '../../models/constants/validation-errors';

@Component({
  selector: 'app-remove-car',
  templateUrl: './remove-car.component.html',
  styleUrls: ['./remove-car.component.css']
})

export class RemoveCarComponent implements OnInit, OnDestroy {
  messageResponse = '';
  regNumberPattern = Patterns.REG_NUMBER;
  regNumberValid = ValidationErrors.REG_NUMBER_VALID;
  regNumberRequired = ValidationErrors.REG_NUMBER_REQUIRED;

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  back() {
    this.router.navigate(['/']).then();
  }

  removeCar(formCar: NgForm) {
    const subscription = this.serviceRentCompany.removeCar(formCar.value.regNumber).subscribe(
      value => {
        this.messageResponse = value.message;
        formCar.resetForm();
        subscription.unsubscribe();
      }
    );
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
