import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {Model} from '../../../models/model';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent {
  constructor(private serviceRentCompany: AbstractRentCompany) {
  }

  saveModel(formModel: NgForm) {
    this.serviceRentCompany.addModel(formModel.value as Model).subscribe(
      value => formModel.resetForm(),
      error => console.log('----------------------OШИБКА!!!-----------------------' + error.message)
    );
  }
}
