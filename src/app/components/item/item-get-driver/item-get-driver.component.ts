import {Component, OnInit} from '@angular/core';
import {AbstractAPIRentCompany} from '../../../services/AbstractAPIRentCompany';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-get-driver',
  templateUrl: './item-get-driver.component.html',
  styleUrls: ['./item-get-driver.component.css']
})
export class ItemGetDriverComponent {
  driver: any = {};
  licenseIdDriver = '';

  constructor(private serviceRentCompany: AbstractAPIRentCompany, private router: Router) {
  }

  submitLicenseId() {
    const subscription = this.serviceRentCompany.getDriver(this.licenseIdDriver).subscribe(
      value => {
        this.driver = value.content;
        this.licenseIdDriver = '';
        subscription.unsubscribe();
      }
    );
  }

  back() {
    this.router.navigate(['/']);
  }
}
