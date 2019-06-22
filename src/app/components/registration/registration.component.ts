import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractRegistration, User} from '../../services/abstract-registration';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private serviceSecurity: AbstractRegistration) {
  }

  ngOnInit() {
  }

  registration(formUser: NgForm) {
    this.serviceSecurity.addAccount(formUser.value as User).subscribe(
      value => {
        formUser.resetForm();
        console.log(value.message);
      },
      error1 => alert('Server is not available')
    );
  }
}
