import {Component, OnInit} from '@angular/core';
import {AbstractRentCompany} from '../../../services/abstract-rent-company';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';
import {Driver} from '../../../models/driver';

@Component({
  selector: 'app-item-get-driver',
  templateUrl: './item-get-driver.component.html',
  styleUrls: ['./item-get-driver.component.css']
})
export class ItemGetDriverComponent {
  drivers: Driver[] = [];
  licenseIdDriver = '';
  dataSource: MatTableDataSource<Driver>;
  displayedColumns: string[] = ['licenseId', 'name', 'birthYear', 'phone'];

  constructor(private serviceRentCompany: AbstractRentCompany, private router: Router) {
  }

  submitLicenseId() {
    this.serviceRentCompany.getDriver(this.licenseIdDriver).subscribe(
      value => {
        this.drivers.push(value.content as Driver);
        this.dataSource = new MatTableDataSource(this.drivers);
        this.licenseIdDriver = '';
      }
    );
  }

  back() {
    this.router.navigate(['/']);
  }
}
