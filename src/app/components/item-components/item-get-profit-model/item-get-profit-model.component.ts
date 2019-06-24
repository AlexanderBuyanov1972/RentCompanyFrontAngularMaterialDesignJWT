import {Component} from '@angular/core';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-get-profit-model',
  templateUrl: './item-get-profit-model.component.html',
  styleUrls: ['./item-get-profit-model.component.css']
})
export class ItemGetProfitModelComponent {
  modelNameCar = '';
  modelCost = '';
  cost = 0;

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  submitModelName() {
    this.modelCost = this.modelNameCar;
    this.serviceRentCompany.getModelProfit(this.modelNameCar).subscribe(
      value => {
        this.cost = value.content;
        this.modelNameCar = '';
      }
    );
  }

  back() {
    this.router.navigate(['/']);
  }
}