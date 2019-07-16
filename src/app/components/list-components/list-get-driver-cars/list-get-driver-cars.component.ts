import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';
import {AbstractRentCompany} from '../../../services/rent_company/abstract-rent-company';
import {Router} from '@angular/router';
import {Car} from '../../../models/car';
import {Patterns} from '../../../models/constants/patterns';
import {ValidationErrors} from '../../../models/constants/validation-errors';

@Component({
  selector: 'app-list-get-driver-cars',
  templateUrl: './list-get-driver-cars.component.html',
  styleUrls: ['./list-get-driver-cars.component.css']
})
export class ListGetDriverCarsComponent implements OnInit, OnDestroy {
  licenseIdDriver = '';
  dataSource: MatTableDataSource<Car>;
  displayedColumns: string[] = ['regNumber', 'color', 'modelName', 'state'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  licenseIdPattern = Patterns.LICENSE_ID;
  licenseIdValid = ValidationErrors.LICENSE_ID_VALID;
  licenseIdRequired = ValidationErrors.LICENSE_ID_REQUIRED;
  messageResponse = '';

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  submitLicenseId() {
    const subscription = this.serviceRentCompany.getDriverCars(this.licenseIdDriver).subscribe(
      value => {
        this.dataSource = new MatTableDataSource(value.content as Car[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.messageResponse = value.message;
        subscription.unsubscribe();
      }
    );
  }

  reset() {
    this.licenseIdDriver = '';
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
