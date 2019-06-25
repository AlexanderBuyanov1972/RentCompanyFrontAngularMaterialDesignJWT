import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {Patterns} from '../../../models/constants/patterns';
import {ValidationErrors} from '../../../models/constants/validation-errors';

@Component({
  selector: 'app-item-get-profit-model',
  templateUrl: './item-get-profit-model.component.html',
  styleUrls: ['./item-get-profit-model.component.css']
})
export class ItemGetProfitModelComponent implements OnInit, OnDestroy {
  modelNameCar = '';
  modelCost = '';
  cost = 0;
  modelNamePattern = Patterns.MODEL_NAME;
  modelNameValid = ValidationErrors.MODEL_NAME_VALID;
  modelNameRequired = ValidationErrors.MODEL_NAME_REQUIRED;
  messageResponse = '';

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  submitModelName() {
    this.modelCost = this.modelNameCar;
    const subscription = this.serviceRentCompany.getModelProfit(this.modelNameCar).subscribe(
      value => {
        this.cost = value.content;
        this.modelNameCar = '';
        this.messageResponse = value.message;
        subscription.unsubscribe();
      }
    );
  }

  back() {
    this.router.navigate(['/']).then();
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
