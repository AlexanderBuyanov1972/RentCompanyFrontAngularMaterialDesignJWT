import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-get-driver-cars',
  templateUrl: './list-get-driver-cars.component.html',
  styleUrls: ['./list-get-driver-cars.component.css']
})
export class ListGetDriverCarsComponent {
  licenseIdDriver = '';
  cars$: Observable<any> ;

  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) { }


  submitLicenseId() {
    this.cars$ = this.serviceRentCompany.getDriverCars(this.licenseIdDriver).pipe(map(
      value => value.content
    ));
  }

  back() {
    this.router.navigate(['/']);
  }

  reset() {
    this.licenseIdDriver = '';
  }
}
