import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractSecurityService} from '../abstract-security.service';
import {User} from '../User';

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
      (value) => {
        if (value.code === 200) {
          console.log(value.message);
          console.log(value.code);
          console.log(value.timestamp);
          formUser.resetForm();
        }
      }
    );
  }
}
