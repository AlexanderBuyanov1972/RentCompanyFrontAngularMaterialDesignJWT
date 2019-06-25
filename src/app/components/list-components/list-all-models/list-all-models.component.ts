import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {Model} from '../../../models/model';

@Component({
  selector: 'app-list-all-models',
  templateUrl: './list-all-models.component.html',
  styleUrls: ['./list-all-models.component.css']
})
export class ListAllModelsComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<Model>;
  displayedColumns: string[] = ['modelName', 'gasTank', 'company', 'country', 'priceDay'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  messageResponse = '';

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
    const subscription = this.serviceRentCompany.getAllModels().subscribe(
      value => {
        this.dataSource = new MatTableDataSource(value.content as Model[]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.messageResponse = value.message;
        subscription.unsubscribe();
      }
    );
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
