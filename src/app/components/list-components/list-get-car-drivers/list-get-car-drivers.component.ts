import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Driver} from '../../../models/driver';

@Component({
  selector: 'app-list-get-car-drivers',
  templateUrl: './list-get-car-drivers.component.html',
  styleUrls: ['./list-get-car-drivers.component.css']
})
export class ListGetCarDriversComponent {
  regNumber = '';
  dataSource: MatTableDataSource<Driver>;
  displayedColumns: string[] = ['licenseId', 'name', 'birthYear', 'phone'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) { }

  submitRegNumber() {
    this.serviceRentCompany.getCarDrivers(this.regNumber).subscribe(
      value => {
        this.dataSource = new MatTableDataSource(value.content as Driver[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  back() {
    this.router.navigate(['/']);
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
}
