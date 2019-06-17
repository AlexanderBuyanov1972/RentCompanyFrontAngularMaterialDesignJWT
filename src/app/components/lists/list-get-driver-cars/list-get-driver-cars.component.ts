import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Observable} from 'rxjs';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Car} from '../../../models/car';

@Component({
  selector: 'app-list-get-driver-cars',
  templateUrl: './list-get-driver-cars.component.html',
  styleUrls: ['./list-get-driver-cars.component.css']
})
export class ListGetDriverCarsComponent {
  licenseIdDriver = '';
  dataSource: MatTableDataSource<Car>;
  displayedColumns: string[] = ['regNumber', 'color', 'modelName', 'inUse', 'flRemoved', 'state'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) {
  }
  submitLicenseId() {
    this.serviceRentCompany.getDriverCars(this.licenseIdDriver).subscribe(
      value => {
        this.dataSource = new MatTableDataSource(value.content as Car[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  back() {
    this.router.navigate(['/']);
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
}
