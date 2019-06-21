import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractRegistration} from '../abstract-registration';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceSecurity: AbstractRegistration) {
  }

  ngOnInit() {
  }

  loginSession(formUser: NgForm) {
    this.serviceSecurity.login(formUser.value).subscribe(
      value => {
        console.log(value.message);
        formUser.resetForm();
      }
    );
  }
}
