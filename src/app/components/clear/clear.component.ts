import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractRentCompany} from '../../services/rent_company/abstract-rent-company';
import {Router} from '@angular/router';
import {Car} from '../../models/car';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Patterns} from '../../models/constants/patterns';
import {ValidationErrors} from '../../models/constants/validation-errors';


@Component({
  selector: 'app-clear',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.css']
})
export class ClearComponent {
  displayedColumns: string[] = ['regNumber', 'modelName', 'flRemoved'];
  dataSource: MatTableDataSource<Car>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  patternDate = Patterns.DATA;
  patternDays = Patterns.DAYS;
  validDate = ValidationErrors.DATE_VALID;
  requiredDate = ValidationErrors.DATE_REQUIRED;
  validDays = ValidationErrors.DAYS_VALID;
  requiredDays = ValidationErrors.DAYS_REQUIRED;
  messageResponse = '';
  dateClear = '';
  daysClear = '';

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  clear() {
    console.log('daysClear------------>' + this.daysClear);
    console.log('dateClear------------>' + this.dateClear);
    const subscription = this.serviceRentCompany.clear(this.dateClear, this.daysClear).subscribe(
      value => {
        this.dataSource = new MatTableDataSource(value.content as Car[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dateClear = '';
        this.daysClear = '';
        this.messageResponse = value.message;
        subscription.unsubscribe();
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
