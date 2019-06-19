import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractSecurityService, User} from '../abstract-security.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private serviceSecurity: AbstractSecurityService) { }

  ngOnInit() {
  }

  logout(formUser: NgForm) {
 this.serviceSecurity.logout(formUser.value as User).subscribe(
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
