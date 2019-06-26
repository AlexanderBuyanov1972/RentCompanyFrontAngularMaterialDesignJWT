import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Model} from '../../../models/model';

@Component({
  selector: 'app-list-most-profit-models',
  templateUrl: './list-most-profit-models.component.html',
  styleUrls: ['./list-most-profit-models.component.css']
})
export class ListMostProfitModelsComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<Model>;
  displayedColumns: string[] = ['modelName', 'gasTank', 'company', 'country', 'priceDay'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  messageResponse = '';

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  ngOnInit() {
    const subscription = this.serviceRentCompany.getMostProfitModels().subscribe(
      value => {
        this.dataSource = new MatTableDataSource(value.content as Model[]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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

  ngOnDestroy(): void {
  }
}
