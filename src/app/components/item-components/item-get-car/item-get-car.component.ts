import {Component} from '@angular/core';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {Car} from '../../../models/car';
import {MatTableDataSource} from '@angular/material';

class PeriodicElement {
}

@Component({
  selector: 'app-item-get-car',
  templateUrl: './item-get-car.component.html',
  styleUrls: ['./item-get-car.component.css']
})
export class ItemGetCarComponent {
  regNumberCar = '';
  displayedColumns: string[] = ['regNumber', 'color', 'inUse', 'flRemoved', 'modelName', 'state'];
  dataSource: MatTableDataSource<Car>;
  cars: Car[] = [];

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  submitRegNumber() {
    this.serviceRentCompany.getCar(this.regNumberCar).subscribe(
      value => {
        this.cars.push(value.content as Car);
        this.dataSource = new MatTableDataSource(this.cars);
        console.log(this.dataSource);
        this.regNumberCar = '';
      }
    );
  }

  back() {
    this.router.navigate(['/']);
  }
}
