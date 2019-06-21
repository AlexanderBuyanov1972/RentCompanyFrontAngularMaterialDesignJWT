import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {Car} from '../../../models/car';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-all-cars',
  templateUrl: './list-all-cars.component.html',
  styleUrls: ['./list-all-cars.component.css']
})

export class ListAllCarsComponent implements OnInit {
  dataSource: MatTableDataSource<Car>;
  displayedColumns: string[] = ['regNumber', 'color', 'modelName', 'inUse', 'flRemoved', 'state'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
    this.serviceRentCompany.getAllCars().subscribe(
      value => {
        this.dataSource = new MatTableDataSource(value.content as Car[]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
