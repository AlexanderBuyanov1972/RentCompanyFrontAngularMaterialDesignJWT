import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-most-popular-models',
  templateUrl: './list-most-popular-models.component.html',
  styleUrls: ['./list-most-popular-models.component.css']
})
export class ListMostPopularModelsComponent implements OnInit {
  models$: Observable<any>;

  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) {
  }

  ngOnInit() {
    this.models$ = this.serviceRentCompany.getMostPopularModelNames().pipe(map(
      value => value.content
    ));
  }

  back() {
    this.router.navigate(['/']);
  }
}
