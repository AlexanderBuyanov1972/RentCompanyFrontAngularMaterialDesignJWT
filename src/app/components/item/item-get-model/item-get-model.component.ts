import {Component, OnInit} from '@angular/core';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-get-model',
  templateUrl: './item-get-model.component.html',
  styleUrls: ['./item-get-model.component.css']
})
export class ItemGetModelComponent {
  modelNameCar = '';
  model: any = {};

  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) {
  }

  submitModelName() {
    this.serviceRentCompany.getModel(this.modelNameCar).subscribe(
      value => {
        this.model = value.content;
        this.modelNameCar = '';
      }
    );
  }

  back() {
    this.router.navigate(['/']);
  }
}
