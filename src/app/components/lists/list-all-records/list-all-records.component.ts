import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-all-records',
  templateUrl: './list-all-records.component.html',
  styleUrls: ['./list-all-records.component.css']
})
export class ListAllRecordsComponent implements OnInit {
  records$: Observable<any>;

  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) { }

  ngOnInit() {
    this.records$ = this.serviceRentCompany.getAllRecords().pipe(map(
      value => value.content
    ));
  }

  back() {
    this.router.navigate(['/']);
  }
}
