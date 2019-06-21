import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Model} from '../../../models/model';

@Component({
  selector: 'app-list-most-popular-models',
  templateUrl: './list-most-popular-models.component.html',
  styleUrls: ['./list-most-popular-models.component.css']
})
export class ListMostPopularModelsComponent implements OnInit {
  dataSource: MatTableDataSource<Model>;
  displayedColumns: string[] = ['modelName', 'gasTank', 'company', 'country', 'priceDay'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  ngOnInit() {
    this.serviceRentCompany.getMostPopularModels().subscribe(
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
