import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbstractRegistration} from './abstract-registration';
import {RegistrationService} from './registration.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {provide: AbstractRegistration, useExisting: RegistrationService}
  ]
})
export class SecurityModule {
}
