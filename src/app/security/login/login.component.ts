import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractSecurityService, User} from '../abstract-security.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceSecurity: AbstractSecurityService) {
  }

  ngOnInit() {
  }

  login(formUser: NgForm) {
this.serviceSecurity.login(formUser.value as User).subscribe(
  (value) => {
    if (value.code === 200) {
      console.log(value.code);
      console.log(value.message);
      console.log(value.timestamp);
      formUser.resetForm();
    }
  }
);

  }
}
