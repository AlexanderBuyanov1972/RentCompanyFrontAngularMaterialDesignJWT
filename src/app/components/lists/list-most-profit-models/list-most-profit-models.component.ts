import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-most-profit-models',
  templateUrl: './list-most-profit-models.component.html',
  styleUrls: ['./list-most-profit-models.component.css']
})
export class ListMostProfitModelsComponent implements OnInit {
  models$: Observable<any>;

  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) { }

  ngOnInit() {
    this.models$ = this.serviceRentCompany.getMostProfitModelNames().pipe(map(
      value => value.content
    ));
  }

  back() {
    this.router.navigate(['/']);
  }
}
