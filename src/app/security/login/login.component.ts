import {Component, OnInit} from '@angular/core';
import {AbstractRegistration} from '../abstract-registration';
import {AbstractAuthService} from '../../services/abstract-auth-service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailUser: string;
  passwordUser: string;

  constructor(private serviceSecurity: AbstractRegistration,
              private authService: AbstractAuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.login('google');
    this.router.navigate(['/home']).then();
  }

  loginWithGitHub() {
    this.authService.login('github');
    this.router.navigate(['/home']).then();
  }

  loginWithFacebook() {
    this.authService.login('facebook');
    this.router.navigate(['/home']).then();
  }

  loginWithEmailAndPassword() {
    this.authService.login('email_password', this.emailUser, this.passwordUser);
    this.router.navigate(['/home']).then();
  }
}
