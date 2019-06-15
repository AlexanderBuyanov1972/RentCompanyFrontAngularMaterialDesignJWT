import {Component, OnInit} from '@angular/core';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-all-drivers',
  templateUrl: './list-all-drivers.component.html',
  styleUrls: ['./list-all-drivers.component.css']
})
export class ListAllDriversComponent implements OnInit {
  drivers$: Observable<any>;

  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) {
  }

  ngOnInit() {
    this.drivers$ = this.serviceRentCompany.getAllDrivers().pipe(map(
      value => value.content
    ));
  }

  back() {
    this.router.navigate(['/']);
  }
}
