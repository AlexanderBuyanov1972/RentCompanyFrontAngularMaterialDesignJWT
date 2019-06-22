import {Component, OnInit} from '@angular/core';
import {AbstractAuthService} from '../../services/abstract-auth-service';
import {Router} from '@angular/router';
import {PathRoutes} from '../../models/constants/path-routes';
import {LabelRoutes} from '../../models/constants/label-routes';

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
  homeLink: NavLink = {path: PathRoutes.HOME_ROUTE, label: LabelRoutes.HOME_LABEL};
  getModelLink: NavLink = {path: PathRoutes.GET_MODEL_ROUTE, label: LabelRoutes.GET_MODEL_LABEL};
  getAllModelsLink: NavLink = {path: PathRoutes.GET_ALL_MODELS_ROUTE, label: LabelRoutes.GET_ALL_MODELS_LABEL};
  loginLink: NavLink = {path: PathRoutes.LOGIN_ROUTE, label: LabelRoutes.LOGIN_LABEL};
  getCarLink: NavLink = {path: PathRoutes.GET_CAR_ROUTE, label: LabelRoutes.GET_CAR_LABEL};
  getAllCarsLink: NavLink = {path: PathRoutes.GET_ALL_CARS_ROUTE, label: LabelRoutes.GET_ALL_CARS_LABEL};
  // -------------------ADMIN---------------------------------
  navLinksAdmins: NavLink[] = [
    {path: PathRoutes.REGISTRATION_ROUTE, label: LabelRoutes.REGISTRATION_LABEL}
  ];
  // ---------------------CLERK-------------------------------
  navLinksClerks: NavLink[] = [
    // {path: PathRoutes.GET_CAR_ROUTE, label: LabelRoutes.GET_CAR_LABEL},
    // {path: PathRoutes.GET_ALL_CARS_ROUTE, label: LabelRoutes.GET_ALL_CARS_LABEL},
    {path: PathRoutes.ADD_DRIVER_ROUTE, label: LabelRoutes.ADD_DRIVER_LABEL},
    {path: PathRoutes.RENT_CAR_ROUTE, label: LabelRoutes.RENT_CAR_LABEL},
    {path: PathRoutes.RETURN_CAR_ROUTE, label: LabelRoutes.RETURN_CAR_LABEL},
    {path: PathRoutes.GET_DRIVER_FOR_CLERK_ROUTE, label: LabelRoutes.GET_DRIVER_LABEL},
    {path: PathRoutes.GET_ALL_DRIVERS_FOR_CLERK_ROUTE, label: LabelRoutes.GET_ALL_DRIVERS_LABEL}
  ];
  // ---------------------------------------------MANAGER-------------------------------
  navLinksManagers: NavLink[] = [
    // {path: PathRoutes.GET_CAR_ROUTE, label: LabelRoutes.GET_CAR_LABEL},
    // {path: PathRoutes.GET_ALL_CARS_ROUTE, label: LabelRoutes.GET_ALL_CARS_LABEL},
    {path: PathRoutes.ADD_MODEL_ROUTE, label: LabelRoutes.ADD_MODEL_LABEL},
    {path: PathRoutes.ADD_CAR_ROUTE, label: LabelRoutes.ADD_CAR_LABEL},
    {path: PathRoutes.GET_DRIVER_FOR_MANAGER_ROUTE, label: LabelRoutes.GET_DRIVER_LABEL},
    {path: PathRoutes.REMOVE_CAR_ROUTE, label: LabelRoutes.REMOVE_CAR_LABEL},
    {path: PathRoutes.CLEAR_CARS_ROUTE, label: LabelRoutes.CLEAR_CARS_LABEL},
    {path: PathRoutes.GET_ALL_DRIVERS_FOR_MANAGER_ROUTE, label: LabelRoutes.GET_ALL_DRIVERS_LABEL},
    {path: PathRoutes.GET_PROFIT_MODEL_FOR_MANAGER_ROUTE, label: LabelRoutes.GET_PROFIT_MODEL_LABEL}
  ];
  // ----------------------------------------------DRIVER-------------------------------
  navLinksDrivers: NavLink[] = [
    // {path: PathRoutes.GET_CAR_ROUTE, label: LabelRoutes.GET_CAR_LABEL},
    // {path: PathRoutes.GET_ALL_CARS_ROUTE, label: LabelRoutes.GET_ALL_CARS_LABEL},
    {path: PathRoutes.GET_DRIVER_CARS_ROUTE, label: LabelRoutes.GET_DRIVER_CARS_LABEL},
    {path: PathRoutes.GET_CAR_DRIVERS_ROUTE, label: LabelRoutes.GET_CAR_DRIVERS_LABEL}
  ];
  // ---------------------STATIST-------------------------------
  navLinksStatists: NavLink[] = [
    // {path: PathRoutes.GET_CAR_ROUTE, label: LabelRoutes.GET_CAR_LABEL},
    // {path: PathRoutes.GET_ALL_CARS_ROUTE, label: LabelRoutes.GET_ALL_CARS_LABEL},
    {path: PathRoutes.MOST_POPULAR_MODELS_ROUTE, label: LabelRoutes.MOST_POPULAR_MODELS_LABEL},
    {path: PathRoutes.MOST_PROFIT_MODELS_ROUTE, label: LabelRoutes.MOST_PROFIT_MODELS_LABEL},
    {path: PathRoutes.GET_PROFIT_MODEL_FOR_STATIST_ROUTE, label: LabelRoutes.GET_PROFIT_MODEL_LABEL}
  ];
  // ---------------------TECHNICIAN-------------------------------
  navLinksTechnicians: NavLink[] = [
    // {path: PathRoutes.GET_CAR_ROUTE, label: LabelRoutes.GET_CAR_LABEL},
    // {path: PathRoutes.GET_ALL_CARS_ROUTE, label: LabelRoutes.GET_ALL_CARS_LABEL},
    {path: PathRoutes.GET_ALL_RECORDS_ROUTE, label: LabelRoutes.GET_ALL_RECORDS_LABEL}
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
    this.router.navigate([PathRoutes.HOME_ROUTE]).then();
  }
}
