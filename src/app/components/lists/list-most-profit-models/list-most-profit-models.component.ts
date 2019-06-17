import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Model} from '../../../models/model';

@Component({
  selector: 'app-list-most-profit-models',
  templateUrl: './list-most-profit-models.component.html',
  styleUrls: ['./list-most-profit-models.component.css']
})
export class ListMostProfitModelsComponent implements OnInit {
  dataSource: MatTableDataSource<Model>;
  displayedColumns: string[] = ['modelName', 'gasTank', 'company', 'country', 'priceDay'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) { }

  ngOnInit() {
    this.serviceRentCompany.getMostProfitModels().subscribe(
      value => {
        this.dataSource = new MatTableDataSource(value.content as Model[]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
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
