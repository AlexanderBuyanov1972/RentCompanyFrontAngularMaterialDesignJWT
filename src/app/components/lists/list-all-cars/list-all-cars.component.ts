import {Component, OnInit} from '@angular/core';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-all-cars',
  templateUrl: './list-all-cars.component.html',
  styleUrls: ['./list-all-cars.component.css']
})
export class ListAllCarsComponent implements OnInit {
  cars$: Observable<any>;

  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) {
  }

  ngOnInit() {
    this.cars$ = this.serviceRentCompany.getAllCars().pipe(map(
      value => value.content
    ));
  }

  back() {
    this.router.navigate(['/']);
  }

}
