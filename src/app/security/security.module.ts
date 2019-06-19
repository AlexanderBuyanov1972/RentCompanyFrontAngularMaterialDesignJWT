import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbstractSecurityService} from './abstract-security.service';
import {SecurityService} from './security.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: AbstractSecurityService, useExisting: SecurityService}
  ]
})
export class SecurityModule { }
