import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {Car} from '../../../models/car';
import {MatTableDataSource} from '@angular/material';
import {Patterns} from '../../../models/constants/patterns';
import {ValidationErrors} from '../../../models/constants/validation-errors';

class PeriodicElement {
}

@Component({
  selector: 'app-item-get-car',
  templateUrl: './item-get-car.component.html',
  styleUrls: ['./item-get-car.component.css']
})
export class ItemGetCarComponent implements OnInit, OnDestroy {
  regNumberCar = '';
  displayedColumns: string[] = ['regNumber', 'color', 'inUse', 'flRemoved', 'modelName', 'state'];
  dataSource: MatTableDataSource<Car>;
  cars: Car[] = [];
  regNumberPattern = Patterns.REG_NUMBER;
  regNumberValid = ValidationErrors.REG_NUMBER_VALID;
  regNumberRequired = ValidationErrors.REG_NUMBER_REQUIRED;
  messageResponse = '';

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  submitRegNumber() {
    const subscription = this.serviceRentCompany.getCar(this.regNumberCar).subscribe(
      value => {
        this.cars.push(value.content as Car);
        this.dataSource = new MatTableDataSource(this.cars);
        console.log(this.dataSource);
        this.regNumberCar = '';
        this.messageResponse = value.message;
        subscription.unsubscribe();
      }
    );
  }

  back() {
    this.router.navigate(['/']).then();
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
