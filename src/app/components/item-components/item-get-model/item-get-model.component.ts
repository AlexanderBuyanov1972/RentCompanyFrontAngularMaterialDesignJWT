import {Component, OnInit} from '@angular/core';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {Model} from '../../../models/model';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-item-get-model',
  templateUrl: './item-get-model.component.html',
  styleUrls: ['./item-get-model.component.css']
})
export class ItemGetModelComponent {
  modelNameCar = '';
  models: Model[] = [];
  dataSource: MatTableDataSource<Model>;
  displayedColumns: string[] = ['modelName', 'gasTank', 'company', 'country', 'priceDay'];

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  submitModelName() {
    this.serviceRentCompany.getModel(this.modelNameCar).subscribe(
      value => {
        this.models.push(value.content as Model);
        this.dataSource = new MatTableDataSource<Model>(this.models);
        this.modelNameCar = '';
      }
    );
  }

  back() {
    this.router.navigate(['/']);
  }
}
