import {Injectable} from '@angular/core';
import {AbstractAuthService, User} from './abstract-auth-service';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

interface RegUser {
  uid: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthFirebaseService implements AbstractAuthService {
  user: firebase.User;
  admins: RegUser[] = [];
  clerks: RegUser[] = [];
  managers: RegUser[] = [];
  drivers: RegUser[] = [];
  statists: RegUser[] = [];
  technicians: RegUser[] = [];

  constructor(private fireStore: AngularFirestore, private fireAuth: AngularFireAuth) {
    fireStore.collection('admins').valueChanges().subscribe(
      admins => {
        this.admins = admins as RegUser[];
      }
    );
    fireStore.collection('clerks').valueChanges().subscribe(
      clerks => {
        this.clerks = clerks as RegUser[];
      }
    );
    fireStore.collection('managers').valueChanges().subscribe(
      managers => {
        this.managers = managers as RegUser[];
      }
    );
    fireStore.collection('drivers').valueChanges().subscribe(
      drivers => {
        this.drivers = drivers as RegUser[];
      }
    );
    fireStore.collection('statists').valueChanges().subscribe(
      statists => {
        this.statists = statists as RegUser[];
      }
    );
    fireStore.collection('technicians').valueChanges().subscribe(
      technicians => {
        this.technicians = technicians as RegUser[];
      }
    );
    fireAuth.authState.subscribe(
      user => this.user = user
    );
  }

  getUser(): User {
    if (!this.user) {
      return undefined;
    }
    return {email: this.user.email, username: this.user.displayName, uid: this.user.uid} as User;
  }

  isAdmin(): boolean {
    if (!this.isAuth()) {
      return false;
    }
    return !!this.admins.find(admin => admin.uid === this.user.uid);
  }

  isAuth(): boolean {
    return !!this.user;
  }

  login(loginMethod: string, email?: string, password?: string) {
    if (loginMethod === 'google') {
      this.loginWithGoogle();
    }
    if (loginMethod === 'github') {
      this.loginWithGitHub();
    }
    if (loginMethod === 'facebook') {
      this.loginWithFacebook();
    }
    if (loginMethod === 'email_password') {
      this.loginWithEmailAndPssword(email, password);
    }
  }

  logout() {
    this.fireAuth.auth.signOut().then();
  }

  isClerk(): boolean {
    if (!this.isAuth()) {
      return false;
    }
    return !!this.clerks.find(clerk => clerk.uid === this.user.uid);
  }

  isDriver(): boolean {
    if (!this.isAuth()) {
      return false;
    }
    return !!this.drivers.find(driver => driver.uid === this.user.uid);
  }

  isManager(): boolean {
    if (!this.isAuth()) {
      return false;
    }
    return !!this.managers.find(manager => manager.uid === this.user.uid);
}

  isStatist(): boolean {
    if (!this.isAuth()) {
      return false;
    }
    return !!this.statists.find(statist => statist.uid === this.user.uid);
  }

  isTechnician(): boolean {
    if (!this.isAuth()) {
      return false;
    }
    return !!this.technicians.find(technician => technician.uid === this.user.uid);
  }

  private loginWithGoogle() {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then();
  }

  private loginWithGitHub() {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.GithubAuthProvider()).then();
  }

  private loginWithFacebook() {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()).then();
  }

  private loginWithEmailAndPssword(email: string, password: string) {
    this.fireAuth.auth.signInWithEmailAndPassword(email, password).then();
  }
}
