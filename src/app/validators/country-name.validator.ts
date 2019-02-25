import { COUNTRY_NAMES } from './../data/countries.data';
import { AbstractControl } from "@angular/forms";

export function CountryNameValidator(control: AbstractControl): { invalidCountryName: boolean } | null{
  return (COUNTRY_NAMES.indexOf(control.value) >= 0) ? null : { invalidCountryName: true};
}