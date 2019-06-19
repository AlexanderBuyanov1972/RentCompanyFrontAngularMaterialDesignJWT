import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractAPIRentCompany} from '../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';
import {Car} from '../../models/car';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-clear',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.css']
})
export class ClearComponent {
  listCars: Car[] = [];
  displayedColumns: string[] = ['regNumber', 'modelName', 'flRemoved'];
  dataSource: MatTableDataSource<Car>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) {
  }

  submitDateDays(formDD: NgForm) {
    this.serviceRentCompany.clear(formDD.value.date, formDD.value.days).subscribe(
      value => {
        this.dataSource = new MatTableDataSource(value.content as Car[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        formDD.resetForm();
      },
      error => {
        console.log('---------------ERROR---------------->' + error);
      }
    );
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
}
