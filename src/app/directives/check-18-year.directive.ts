import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appCheck18Year]', providers: [{provide: NG_VALIDATORS, useExisting: Check18YearDirective, multi: true}]
})
export class Check18YearDirective implements Validator {

  constructor() {
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (new Date().getFullYear() - control.value as number >= 18) {
      return null;
    }
    return {haveNot18Years: true};
  }

}
