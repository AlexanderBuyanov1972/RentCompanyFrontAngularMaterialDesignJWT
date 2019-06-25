import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {RentRecord} from '../../../models/rent-record';

@Component({
  selector: 'app-list-all-records',
  templateUrl: './list-all-records.component.html',
  styleUrls: ['./list-all-records.component.css']
})
export class ListAllRecordsComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<RentRecord>;
  displayedColumns: string[] = ['licenseId', 'regNumber', 'rentDate',
    'returnDate', 'gasTankPercent', 'rentDays', 'damages', 'cost'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  messageResponse = '';

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
    const subscription = this.serviceRentCompany.getAllRecords().subscribe(
      value => {
        this.dataSource = new MatTableDataSource(value.content as RentRecord[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
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
