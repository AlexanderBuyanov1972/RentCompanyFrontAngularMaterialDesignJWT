import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractRentCompany} from '../../../services/rent_company/abstract-rent-company';
import {Router} from '@angular/router';
import {Model} from '../../../models/model';
import {MatTableDataSource} from '@angular/material';
import {ValidationErrors} from '../../../models/constants/validation-errors';
import {NgForm} from '@angular/forms';

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
  modelNamesRequired = ValidationErrors.MODEL_NAME_REQUIRED;
  messageResponse = '';
  valueModel = '';
  nameModels: string[] = [];


  constructor(private rcs: AbstractRentCompany, private router: Router) {
    rcs.getAllModelNames().subscribe(
      value => {
        this.nameModels = value.content as string[];
      }
    );
  }

  submitModelName(formCar: NgForm) {
    const subscription = this.rcs.getModel(formCar.value.modelName as string).subscribe(
      value => {
        this.models.length = 0;
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
