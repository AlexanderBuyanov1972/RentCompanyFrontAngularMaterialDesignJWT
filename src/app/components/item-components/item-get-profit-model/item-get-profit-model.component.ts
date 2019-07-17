import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractRentCompany} from '../../../services/rent_company/abstract-rent-company';
import {Router} from '@angular/router';
import {Patterns} from '../../../models/constants/patterns';
import {ValidationErrors} from '../../../models/constants/validation-errors';
import {NgForm} from '@angular/forms';

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
  valueModel = '';
  nameModels: string[] = [];
  modelNamesRequired = ValidationErrors.MODEL_NAME_REQUIRED;

  constructor(private rcs: AbstractRentCompany,
              private router: Router) {
    rcs.getAllModelNames().subscribe(
      value => {
        this.nameModels = value.content as string[];
      }
    );
  }

  submitModelName(formCar: NgForm) {
    this.modelCost = this.modelNameCar;
    const subscription = this.rcs.getModelProfit(formCar.value.modelName as string).subscribe(
      value => {
        this.cost = value.content;
        this.modelNameCar = '';
        this.messageResponse = value.message;
        subscription.unsubscribe();
      }
    );
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
