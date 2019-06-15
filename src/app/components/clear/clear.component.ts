import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractAPIRentCompany} from '../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';
import {Car} from '../../models/car';

@Component({
  selector: 'app-clear',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.css']
})
export class ClearComponent {
  listCars: Car[] = [];

  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) {
  }

  submitDateDays(formDD: NgForm) {
    this.serviceRentCompany.clear(formDD.value.date, formDD.value.days).subscribe(
      value => {
        this.listCars = value.content;
        formDD.resetForm();
      },
      error => {
        console.log('---------------ERROR---------------->' + error);
      }
    );
  }

  back() {
    this.router.navigate(['/']);
  }
}
