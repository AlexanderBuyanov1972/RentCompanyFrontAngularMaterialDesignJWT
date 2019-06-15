import {Component, OnInit} from '@angular/core';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-all-models',
  templateUrl: './list-all-models.component.html',
  styleUrls: ['./list-all-models.component.css']
})
export class ListAllModelsComponent implements OnInit {
  models$: Observable<any>;

  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) {
  }

  ngOnInit() {
    this.models$ = this.serviceRentCompany.getAllModels().pipe(map(
      value => value.content
    ));
  }

  back() {
    this.router.navigate(['/']);
  }

}
