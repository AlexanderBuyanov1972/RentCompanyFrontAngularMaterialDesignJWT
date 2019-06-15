import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-get-car-drivers',
  templateUrl: './list-get-car-drivers.component.html',
  styleUrls: ['./list-get-car-drivers.component.css']
})
export class ListGetCarDriversComponent {
  regNumberCar = '';
  drivers$: Observable<any>;

  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) {
  }

  submitRegNumber() {
    this.drivers$ = this.serviceRentCompany.getCarDrivers(this.regNumberCar).pipe(map(
      value => value.content
    ));
  }

  back() {
    this.router.navigate(['/']);
  }

  reset() {
    this.regNumberCar = '';
  }
}
