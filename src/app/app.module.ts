import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AbstractAPIRentCompany} from './services/AbstractAPIRentCompany';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {LoginComponent} from './security/login/login.component';
import {LogoutComponent} from './security/logout/logout.component';
import {RegistrationComponent} from './security/registration/registration.component';
import {FormCarComponent} from './components/forms/form-car/form-car.component';
import {FormModelComponent} from './components/forms/form-model/form-model.component';
import {FormDriverComponent} from './components/forms/form-driver/form-driver.component';
import {FormOpenRecordComponent} from './components/forms/form-record-open/form-open-record.component';
import {FormCloseRecordComponent} from './components/forms/form-record-close/form-close-record.component';
import {Route, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SecurityModule} from './security/security.module';

import {ListAllDriversComponent} from './components/lists/list-all-drivers/list-all-drivers.component';
import {ListAllCarsComponent} from './components/lists/list-all-cars/list-all-cars.component';
import {RentCompanyService} from './services/rent-company.service';
import {HttpClientModule} from '@angular/common/http';
import {ListAllModelsComponent} from './components/lists/list-all-models/list-all-models.component';
import {ListAllRecordsComponent} from './components/lists/list-all-records/list-all-records.component';
import {ListMostPopularModelsComponent} from './components/lists/list-most-popular-models/list-most-popular-models.component';
import {ListMostProfitModelsComponent} from './components/lists/list-most-profit-models/list-most-profit-models.component';
import {ItemGetProfitModelComponent} from './components/item/item-get-profit-model/item-get-profit-model.component';
import {ItemGetModelComponent} from './components/item/item-get-model/item-get-model.component';
import {ItemGetCarComponent} from './components/item/item-get-car/item-get-car.component';
import {ItemGetDriverComponent} from './components/item/item-get-driver/item-get-driver.component';
import {ClearComponent} from './components/clear/clear.component';
import {RemoveCarComponent} from './components/remove-car/remove-car.component';
import {ListGetDriverCarsComponent} from './components/lists/list-get-driver-cars/list-get-driver-cars.component';
import {ListGetCarDriversComponent} from './components/lists/list-get-car-drivers/list-get-car-drivers.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { UniqueModelNameDirective } from './directives/unique-model-name.directive';
import { UniqueRegNumberDirective } from './directives/unique-reg-number.directive';
import { UniqueLicenseIdDirective } from './directives/unique-license-id.directive';
import { UniquePhoneNumberDirective } from './directives/unique-phone-number.directive';
import { CheckRentDateDirective } from './directives/check-rent-date.directive';
import { Check18YearDirective } from './directives/check-18-year.directive';
import { CheckReturnDateDirective } from './directives/check-return-date.directive';

const routes: Route[] = [
  // ***********************************************************
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  // **********************************************************
  {path: 'addModel', component: FormModelComponent},
  {path: 'addCar', component: FormCarComponent},
  {path: 'addDriver', component: FormDriverComponent},
  // **********************************************************
  {path: 'rentCar', component: FormOpenRecordComponent},
  {path: 'returnCar', component: FormCloseRecordComponent},
  // *************************************************************
  {path: 'allModels', component: ListAllModelsComponent},
  {path: 'allCars', component: ListAllCarsComponent},
  {path: 'allDrivers', component: ListAllDriversComponent},
  {path: 'allRecords', component: ListAllRecordsComponent},
  // **************************************************************
  {path: 'mostPopularModels', component: ListMostPopularModelsComponent},
  {path: 'mostProfitModels', component: ListMostProfitModelsComponent},
  // **************************************************************
  {path: 'profitModelName', component: ItemGetProfitModelComponent},
  {path: 'getModel', component: ItemGetModelComponent},
  {path: 'getCar', component: ItemGetCarComponent},
  {path: 'getDriver', component: ItemGetDriverComponent},
  // ***************************************************************
  {path: 'clear', component: ClearComponent},
  {path: 'removeCar', component: RemoveCarComponent},
  // ****************************************************
  {path: 'carDrivers', component: ListGetCarDriversComponent},
  {path: 'driverCars', component: ListGetDriverCarsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    ListAllDriversComponent,
    ListAllCarsComponent,
    FormModelComponent,
    FormCarComponent,
    FormDriverComponent,
    FormOpenRecordComponent,
    FormCloseRecordComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    ListAllModelsComponent,
    ListAllRecordsComponent,
    ListMostPopularModelsComponent,
    ListMostProfitModelsComponent,
    ItemGetProfitModelComponent,
    ItemGetModelComponent,
    ItemGetCarComponent,
    ItemGetDriverComponent,
    ClearComponent,
    RemoveCarComponent,
    ListGetDriverCarsComponent,
    ListGetCarDriversComponent,
    UniqueModelNameDirective,
    UniqueRegNumberDirective,
    UniqueLicenseIdDirective,
    UniquePhoneNumberDirective,
    CheckRentDateDirective,
    Check18YearDirective,
    CheckReturnDateDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    SecurityModule,
    BrowserAnimationsModule,
    MatInputModule

  ],
  providers: [{
    provide: AbstractAPIRentCompany, useExisting: RentCompanyService
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
