import {Component} from '@angular/core';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
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
  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) {
  }


  submitModelName() {
    this.modelCost = this.modelNameCar;
    const subscription = this.serviceRentCompany.getModelProfit(this.modelNameCar).subscribe(
      value => {
        this.cost = value.content;
        this.modelNameCar = '';
        subscription.unsubscribe();
      }
    );
  }
  back() {
    this.router.navigate(['/']);
  }
}
