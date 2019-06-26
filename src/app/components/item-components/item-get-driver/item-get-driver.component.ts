import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';
import {Driver} from '../../../models/driver';
import {Subscription} from 'rxjs';
import {Patterns} from '../../../models/constants/patterns';
import {ValidationErrors} from '../../../models/constants/validation-errors';

@Component({
  selector: 'app-item-get-driver',
  templateUrl: './item-get-driver.component.html',
  styleUrls: ['./item-get-driver.component.css']
})
export class ItemGetDriverComponent implements OnInit, OnDestroy {
  drivers: Driver[] = [];
  licenseIdDriver = '';
  dataSource: MatTableDataSource<Driver>;
  displayedColumns: string[] = ['licenseId', 'name', 'birthYear', 'phone'];
  licenseIdPattern = Patterns.LICENSE_ID;
  licenseIdValid = ValidationErrors.LICENSE_ID_VALID;
  licenseIdRequired = ValidationErrors.LICENSE_ID_REQUIRED;
  messageResponse = '';

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  submitLicenseId() {
    const subscription = this.serviceRentCompany.getDriver(this.licenseIdDriver).subscribe(
      value => {
        this.drivers.push(value.content as Driver);
        this.dataSource = new MatTableDataSource(this.drivers);
        this.licenseIdDriver = '';
        this.messageResponse = value.message;
        subscription.unsubscribe();
      }
    );
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
