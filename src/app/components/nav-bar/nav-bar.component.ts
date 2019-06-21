import {Component, OnInit} from '@angular/core';
import {AbstractAuthService} from '../../services/abstract-auth-service';
import {Router} from '@angular/router';

export interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  homeLink: NavLink = {path: 'home', label: 'Home'};
  getModelLink: NavLink = {path: 'getModel', label: 'Get Model'};
  getAllModelsLink: NavLink = {path: 'allModels', label: 'Get All Models'};
  loginLink: NavLink = {path: 'login', label: 'Login'};
  logoutLink: NavLink = {path: 'logout', label: 'LogOut'};

  // -------------------ADMIN---------------------------------
  navLinksAdmins: NavLink[] = [
    {path: 'registration', label: 'Registration'}
  ];
  // ---------------------CLERK-------------------------------
  navLinksClerks: NavLink[] = [
    {path: 'addDriver', label: 'Add New Driver'},
    {path: 'rentCar', label: 'Open New Record'},
    {path: 'returnCar', label: 'Close Record'},
    {path: 'getCar', label: 'Get Car'},
    {path: 'getDriver', label: 'Get Driver'},
    {path: 'allCars', label: 'Get All Cars'},
    {path: 'allDrivers', label: 'Get All Drivers'}
  ];
  // ---------------------MANAGER-------------------------------
  navLinksManagers: NavLink[] = [
    {path: 'addModel', label: 'Add New Model'},
    {path: 'addCar', label: 'Add New Car'},
    {path: 'getCar', label: 'Get Car'},
    {path: 'getDriver', label: 'Get Driver'},
    {path: 'removeCar', label: 'Remove Car'},
    {path: 'clear', label: 'Clear cars'},
    {path: 'allCars', label: 'Get All Cars'},
    {path: 'allDrivers', label: 'Get All Drivers'},
    {path: 'profitModelName', label: 'Get Model Name\'s Profit'}
  ];
  // ---------------------DRIVER-------------------------------
  navLinksDrivers: NavLink[] = [
    {path: 'getCar', label: 'Get Car'},
    {path: 'driverCars', label: 'Get Driver Cars'},
    {path: 'carDrivers', label: 'Get Car Drivers'},
    {path: 'allCars', label: 'Get All Cars'}
  ];
  // ---------------------STATIST-------------------------------
  navLinksStatists: NavLink[] = [
    {path: 'getCar', label: 'Get Car'},
    {path: 'allCars', label: 'Get All Cars'},
    {path: 'mostPopularModels', label: 'Get Most Popular Models'},
    {path: 'mostProfitModels', label: 'Get Most Profit Models'},
    {path: 'profitModelName', label: 'Get Model Name\'s Profit'}
  ];
  // ---------------------TECHNICIAN-------------------------------
  navLinksTechnicians: NavLink[] = [
    {path: 'getCar', label: 'Get Car'},
    {path: 'allCars', label: 'Get All Cars'},
    {path: 'allRecords', label: 'Get All Records'}
  ];


  constructor(private auth: AbstractAuthService,
              private authService: AbstractAuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  isAdmin(): boolean {
    return this.auth.isAdmin();
  }

  isClerk(): boolean {
    return this.auth.isClerk();
  }

  isManager(): boolean {
    return this.auth.isManager();
  }

  isDriver(): boolean {
    return this.auth.isDriver();
  }

  isStatist(): boolean {
    return this.auth.isStatist();
  }

  isTechnician(): boolean {
    return this.auth.isTechnician();
  }

  isAuth() {
    return this.auth.isAuth();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']).then();
  }
}
