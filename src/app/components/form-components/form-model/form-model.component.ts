import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {Model} from '../../../models/model';
import {AbstractRentCompany} from '../../../services/rent_company/abstract-rent-company';
import {Patterns} from '../../../models/constants/patterns';
import {ValidationErrors} from '../../../models/constants/validation-errors';
import {Messages} from '../../../models/constants/messages';
import {SelectionService} from '../../../services/selection.service';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit, OnDestroy {
  modelNamePattern = Patterns.MODEL_NAME;
  twoDigits = Patterns.TWO_DIGITS;
  companyPattern = Patterns.COMPANY;
  countryPattern = Patterns.COUNTRY;
  priceDayPattern = Patterns.PRICE_DAY;
  modelNameValid = ValidationErrors.MODEL_NAME_VALID;
  modelNameRequired = ValidationErrors.MODEL_NAME_REQUIRED;
  gasTankValid = ValidationErrors.GAS_TANK_VALID;
  gasTankRequired = ValidationErrors.GAS_TANK_REQUIRED;
  companyValid = ValidationErrors.COMPANY_VALID;
  companyRequired = ValidationErrors.COMPANY_REQUIRED;
  countryValid = ValidationErrors.COUNTRY_VALID;
  countryRequired = ValidationErrors.COUNTRY_REQUIRED;
  priceDayValid = ValidationErrors.PRICE_DAY_VALID;
  priceDayRequired = ValidationErrors.PRICE_DAY_REQUIRED;
  messageResponse = '';
  namesModel: string[] = [];
  valueModel = '';
  modelNamesRequired = ValidationErrors.MODEL_NAME_REQUIRED;
  valueCompany = '';
  valueCountry = '';
  companies: string[] = [];
  countries: string[] = [];

  constructor(private rcs: AbstractRentCompany, private selectionService: SelectionService) {
    rcs.getAllModelNames().subscribe(
      value => {
        this.namesModel = value.content as string[];
      }
    );
    this.companies = this.selectionService.companies;
    this.countries = this.selectionService.countries;
  }

  saveModel(formModel: NgForm) {
    const subscription = this.rcs.addModel(formModel.value as Model).subscribe(
      value => {
        this.messageResponse = value.message;
        if (this.messageResponse === Messages.OK) {
          formModel.reset();
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
