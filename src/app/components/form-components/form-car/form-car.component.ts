import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Car} from '../../../models/car';
import {State} from '../../../models/State';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Patterns} from '../../../models/constants/patterns';
import {ValidationErrors} from '../../../models/constants/validation-errors';
import {Messages} from '../../../models/constants/messages';

@Component({
  selector: 'app-form-car',
  templateUrl: './form-car.component.html',
  styleUrls: ['./form-car.component.css']
})
export class FormCarComponent implements OnInit, OnDestroy {
  messageResponse = '';
  registrationNumber = Patterns.REG_NUMBER;
  colorCar = Patterns.COLOR;
  modelNameCar = Patterns.MODEL_NAME;
  regNumberValid = ValidationErrors.REG_NUMBER_VALID;
  regNumberRequired = ValidationErrors.REG_NUMBER_REQUIRED;
  colorValid = ValidationErrors.COLOR_VALID;
  colorRequired = ValidationErrors.COLOR_REQUIRED;
  modelNameValid = ValidationErrors.MODEL_NAME_VALID;
  modelNameRequired = ValidationErrors.MODEL_NAME_REQUIRED;

  constructor(private serviceRentCompany: AbstractRentCompany) {
  }

  saveCar(formCar: NgForm) {
    const car = formCar.value as Car;
    car.inUse = false;
    car.flRemoved = false;
    car.state = State.EXCELLENT;
    const subscription = this.serviceRentCompany.addCar(car).subscribe(
      value => {
        this.messageResponse = value.message;
        if (this.messageResponse === Messages.OK) {
          formCar.reset();
        }
        subscription.unsubscribe();
      }
    );
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }


}
