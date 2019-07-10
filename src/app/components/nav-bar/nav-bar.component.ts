import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PathRoutes} from '../../models/constants/path-routes';
import {LabelRoutes} from '../../models/constants/label-routes';
import {AbstractRegistration} from '../../services/abstract-registration';

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
  loginLink: NavLink = {path: PathRoutes.LOGIN_ROUTE, label: LabelRoutes.LOGIN_LABEL};
  // -------------------NO-AUTH---------------------------------
  navLinksNoAuths: NavLink[] = [
  {path: PathRoutes.GET_MODEL_ROUTE, label: LabelRoutes.GET_MODEL_LABEL},
  {path: PathRoutes.GET_ALL_MODELS_ROUTE, label: LabelRoutes.GET_ALL_MODELS_LABEL}
  ];
  // -------------------AUTH---------------------------------
  navLinksAuths: NavLink[] = [
    {path: PathRoutes.GET_CAR_ROUTE, label: LabelRoutes.GET_CAR_LABEL},
    {path: PathRoutes.GET_ALL_CARS_ROUTE, label: LabelRoutes.GET_ALL_CARS_LABEL}
  ];
  // -------------------ADMIN---------------------------------
  navLinksAdmins: NavLink[] = [
    {path: PathRoutes.SHUTDOWN_ROUTE, label: LabelRoutes.SHUTDOWN_LABEL},
    {path: PathRoutes.ACCOUNT_ROUTE + '/' + LabelRoutes.ADD_ACCOUNT_LABEL, label: LabelRoutes.ADD_ACCOUNT_LABEL},
    {path: PathRoutes.ACCOUNT_ROUTE + '/' + LabelRoutes.UPDATE_ACCOUNT_LABEL, label: LabelRoutes.UPDATE_ACCOUNT_LABEL},
    {path: PathRoutes.ACCOUNT_ROUTE + '/' + LabelRoutes.REMOVE_ACCOUNT_LABEL, label: LabelRoutes.REMOVE_ACCOUNT_LABEL},
    {path: PathRoutes.ACCOUNT_ROUTE + '/' + LabelRoutes.GET_ACCOUNT_LABEL, label: LabelRoutes.GET_ACCOUNT_LABEL}
  ];
  // ---------------------CLERK-------------------------------
  navLinksClerks: NavLink[] = [
    {path: PathRoutes.ADD_DRIVER_ROUTE, label: LabelRoutes.ADD_DRIVER_LABEL},
    {path: PathRoutes.RENT_CAR_ROUTE, label: LabelRoutes.RENT_CAR_LABEL},
    {path: PathRoutes.RETURN_CAR_ROUTE, label: LabelRoutes.RETURN_CAR_LABEL},
    {path: PathRoutes.GET_DRIVER_ROUTE, label: LabelRoutes.GET_DRIVER_LABEL},
    {path: PathRoutes.GET_ALL_DRIVERS_ROUTE, label: LabelRoutes.GET_ALL_DRIVERS_LABEL}
  ];
  // ---------------------------------------------MANAGER-------------------------------
  navLinksManagers: NavLink[] = [
    {path: PathRoutes.ADD_MODEL_ROUTE, label: LabelRoutes.ADD_MODEL_LABEL},
    {path: PathRoutes.ADD_CAR_ROUTE, label: LabelRoutes.ADD_CAR_LABEL},
    {path: PathRoutes.REMOVE_CAR_ROUTE, label: LabelRoutes.REMOVE_CAR_LABEL},
    {path: PathRoutes.CLEAR_CARS_ROUTE, label: LabelRoutes.CLEAR_CARS_LABEL},
    {path: PathRoutes.GET_PROFIT_MODEL_ROUTE, label: LabelRoutes.GET_PROFIT_MODEL_LABEL}
  ];
  // ----------------------------------------------DRIVER-----------------------------------------
  navLinksDrivers: NavLink[] = [
    {path: PathRoutes.GET_DRIVER_CARS_ROUTE, label: LabelRoutes.GET_DRIVER_CARS_LABEL},
    {path: PathRoutes.GET_CAR_DRIVERS_ROUTE, label: LabelRoutes.GET_CAR_DRIVERS_LABEL}
  ];
  // ---------------------STATIST-------------------------------
  navLinksStatists: NavLink[] = [
    {path: PathRoutes.MOST_POPULAR_MODELS_ROUTE, label: LabelRoutes.MOST_POPULAR_MODELS_LABEL},
    {path: PathRoutes.MOST_PROFIT_MODELS_ROUTE, label: LabelRoutes.MOST_PROFIT_MODELS_LABEL}
  ];
  // ---------------------TECHNICIAN-------------------------------
  navLinksTechnicians: NavLink[] = [
    {path: PathRoutes.GET_ALL_RECORDS_ROUTE, label: LabelRoutes.GET_ALL_RECORDS_LABEL}
  ];


  constructor(private registrationService: AbstractRegistration, private router: Router) {
  }

  ngOnInit() {
  }

  isAdmin(): boolean {
    return this.registrationService.isAdmin();
  }

  isClerk(): boolean {
    return this.registrationService.isClerk();
  }

  isManager(): boolean {
    return this.registrationService.isManager();
  }

  isDriver(): boolean {
    return this.registrationService.isDriver();
  }

  isStatist(): boolean {
    return this.registrationService.isStatist();
  }

  isTechnician(): boolean {
    return this.registrationService.isTechnician();
  }

  isAuth(): boolean {
    return this.registrationService.isAuth();
  }

  logout() {
    this.registrationService.logout();
    this.router.navigate([PathRoutes.HOME_ROUTE]).then();
  }

}
