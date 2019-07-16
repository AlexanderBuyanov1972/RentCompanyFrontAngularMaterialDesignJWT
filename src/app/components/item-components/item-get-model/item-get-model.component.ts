import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractRentCompany} from '../../../services/rent_company/abstract-rent-company';
import {Router} from '@angular/router';
import {Model} from '../../../models/model';
import {MatTableDataSource} from '@angular/material';
import {Subscription} from 'rxjs';
import {Patterns} from '../../../models/constants/patterns';
import {ValidationErrors} from '../../../models/constants/validation-errors';

@Component({
  selector: 'app-item-get-model',
  templateUrl: './item-get-model.component.html',
  styleUrls: ['./item-get-model.component.css']
})
export class ItemGetModelComponent implements OnInit, OnDestroy {
  modelNameCar = '';
  models: Model[] = [];
  dataSource: MatTableDataSource<Model>;
  displayedColumns: string[] = ['modelName', 'gasTank', 'company', 'country', 'priceDay'];
  modelNamePattern = Patterns.MODEL_NAME;
  modelNameValid = ValidationErrors.MODEL_NAME_VALID;
  modelNameRequired = ValidationErrors.MODEL_NAME_REQUIRED;
  messageResponse = '';


  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  submitModelName() {
    const subscription = this.serviceRentCompany.getModel(this.modelNameCar).subscribe(
      value => {
        this.models.push(value.content as Model);
        this.dataSource = new MatTableDataSource<Model>(this.models);
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
