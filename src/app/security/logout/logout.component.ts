import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AbstractSecurityService} from '../abstract-security.service';
import {User} from '../User';

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
 this.serviceSecurity.removeLogin(formUser.value as User).subscribe(
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
