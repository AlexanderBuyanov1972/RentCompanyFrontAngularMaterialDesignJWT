import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Car} from '../../../models/car';
import {State} from '../../../models/State';
import {AbstractRentCompany} from '../../../services/rent_company/abstract-rent-company';
import {Patterns} from '../../../models/constants/patterns';
import {ValidationErrors} from '../../../models/constants/validation-errors';
import {Messages} from '../../../models/constants/messages';
import {SelectionService} from '../../../services/selection.service';

@Component({
  selector: 'app-form-car',
  templateUrl: './form-car.component.html',
  styleUrls: ['./form-car.component.css']
})
export class FormCarComponent {
  messageResponse = '';

  registrationNumber = Patterns.REG_NUMBER;
  regNumberValid = ValidationErrors.REG_NUMBER_VALID;
  regNumberRequired = ValidationErrors.REG_NUMBER_REQUIRED;
  modelNamesRequired = ValidationErrors.MODEL_NAME_REQUIRED;
  colorRequired = ValidationErrors.COLOR_REQUIRED;
  namesModel: string[] = [];
  colorsModel: string[] = [];
  valueModel = '';
  valueColor = '';

  constructor(private rcs: AbstractRentCompany, private selectionService: SelectionService) {
    rcs.getAllModelNames().subscribe(
      value => {
        this.namesModel = value.content as string[];
      }
    );
    this.colorsModel = this.selectionService.colors;
  }

  saveCar(formCar: NgForm) {
    const car = formCar.value as Car;
    car.inUse = false;
    car.flRemoved = false;
    car.state = State.EXCELLENT;
    const subscription = this.rcs.addCar(car).subscribe(
      value => {
        this.messageResponse = value.message;
        if (this.messageResponse === Messages.OK) {
          formCar.reset();
        }
        subscription.unsubscribe();
      }
    );
  }


}
