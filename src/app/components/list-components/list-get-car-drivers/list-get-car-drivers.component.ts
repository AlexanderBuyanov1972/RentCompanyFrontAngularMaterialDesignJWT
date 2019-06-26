import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Driver} from '../../../models/driver';
import {Subscription} from 'rxjs';
import {Patterns} from '../../../models/constants/patterns';
import {ValidationErrors} from '../../../models/constants/validation-errors';

@Component({
  selector: 'app-list-get-car-drivers',
  templateUrl: './list-get-car-drivers.component.html',
  styleUrls: ['./list-get-car-drivers.component.css']
})
export class ListGetCarDriversComponent implements OnInit, OnDestroy {
  regNumber = '';
  dataSource: MatTableDataSource<Driver>;
  displayedColumns: string[] = ['licenseId', 'name', 'birthYear', 'phone'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  regNumberPattern = Patterns.REG_NUMBER;
  regNumberValid = ValidationErrors.REG_NUMBER_VALID;
  regNumberRequired = ValidationErrors.REG_NUMBER_REQUIRED;
  messageResponse = '';

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  submitRegNumber() {
    const subscription = this.serviceRentCompany.getCarDrivers(this.regNumber).subscribe(
      value => {
        this.dataSource = new MatTableDataSource(value.content as Driver[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.messageResponse = value.message;
        subscription.unsubscribe();
      }
    );
  }

  reset() {
    this.regNumber = '';
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
