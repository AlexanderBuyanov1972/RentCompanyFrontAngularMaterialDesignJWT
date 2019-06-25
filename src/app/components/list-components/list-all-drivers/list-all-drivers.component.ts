import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Driver} from '../../../models/driver';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-all-drivers',
  templateUrl: './list-all-drivers.component.html',
  styleUrls: ['./list-all-drivers.component.css']
})
export class ListAllDriversComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<Driver>;
  displayedColumns: string[] = ['licenseId', 'name', 'birthYear', 'phone'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  messageResponse = '';

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
    const subscription = this.serviceRentCompany.getAllDrivers().subscribe(
      value => {
        this.dataSource = new MatTableDataSource(value.content as Driver[]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.messageResponse = value.message;
        subscription.unsubscribe();
      });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/']).then();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
  }
}
