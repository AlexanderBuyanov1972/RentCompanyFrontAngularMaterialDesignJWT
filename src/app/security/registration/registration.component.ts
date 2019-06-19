import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractSecurityService, User} from '../abstract-security.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private serviceSecurity: AbstractSecurityService) {
  }

  ngOnInit() {
  }

  registration(formUser: NgForm) {
    this.serviceSecurity.addUser(formUser.value as User).subscribe(
      value => formUser.resetForm(),
      error1 => alert('Server is not available')
    );
  }
}
