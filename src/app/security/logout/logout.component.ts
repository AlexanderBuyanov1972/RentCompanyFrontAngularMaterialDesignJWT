import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractRegistration} from '../abstract-registration';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private serviceSecurity: AbstractRegistration) {
  }

  ngOnInit() {
  }

  logoutSession(formUser: NgForm) {
    this.serviceSecurity.logout(formUser.value).subscribe(
      value => {
        console.log(value.message);
        formUser.resetForm();
      }
    );
  }
}
