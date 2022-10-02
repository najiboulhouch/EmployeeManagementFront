import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const dateComparaisonValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const startDate = control.get('dateDebut');
  const endDate = control.get('dateFin');
  return startDate && endDate && startDate.value > endDate.value ? { dateComparaison: true } : null;
};

@Directive({
  selector: '[appDateCompare]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateCompareValidatorDirective, multi: true}]
})
export class DateCompareValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return dateComparaisonValidator(control);
  }
}
