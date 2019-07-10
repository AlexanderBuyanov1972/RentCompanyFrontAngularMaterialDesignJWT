import {Component, OnInit} from '@angular/core';
import {Credentials} from '../../credentials';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernameUser: any;
  passwordUser: any;

  constructor(private authService: AuthService) {
  }

  credentials: Credentials = new Credentials(this.usernameUser, this.passwordUser);

  ngOnInit() {
  }

  public login(): void {
    console.log('this.usernameUser----------->' + this.usernameUser);
    console.log('this.passwordUser----------->' + this.passwordUser);
    this.authService.login(this.credentials);
  }
}
