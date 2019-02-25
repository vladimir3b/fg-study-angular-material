// https://alligator.io/angular/reactive-forms-custom-validator/

import { ICountryModel } from './../../data/models/country.model';
import { COUNTRIES, COUNTRY_NAMES } from './../../data/countries.data';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';

import * as moment from 'moment';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CountryNameValidator } from 'src/app/validators/country-name.validator';

// // tslint:disable-next-line:no-duplicate-imports
// import { default as _rollupMoment } from 'moment';
// const moment = _rollupMoment || _moment;

const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'fg-autocomplete-complex',
  templateUrl: './autocomplete-complex.component.html',
  styleUrls: ['./autocomplete-complex.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ro-RO' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class AutocompleteComplexComponent implements OnInit {

  // PROPERTIES
  public showMessage: boolean;
  public travelingDetailsForm: FormGroup;
  public minimumDepartureDate: moment.Moment;
  public minimumReturnDate: moment.Moment;
  public countryNames: Array<string>;
  public filteredCountryNames: Observable<Array<string>>;

  // CONSTRUCTOR
  constructor() {
    this.showMessage = false;
  }

  // LIFE CYCLE HOOKS
  ngOnInit() {
    // Loading countries name
    this.countryNames = [ ...COUNTRY_NAMES ];


    // Creating virtual form
    this.minimumDepartureDate = moment(new Date()).add(1,'days');
    this.travelingDetailsForm = new FormGroup({
      country: new FormControl(null, [
        Validators.required,
        CountryNameValidator
      ]),
      city: new FormControl({
        value: null,
        disabled: true
      }, [ Validators.required ]),
      departureDate: new FormControl(null, [ Validators.required ]),
      returnDate: new FormControl({
        value: null,
        disabled: true })
      });

    // Filter countries by input value
    this.filteredCountryNames = this.travelingDetailsForm.get('country').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.travelingDetailsForm.get('departureDate').valueChanges.subscribe((date: moment.Moment) => {
      if (this.travelingDetailsForm.get('departureDate').valid) {
        this.minimumReturnDate = date.add(3, 'days');
        this.travelingDetailsForm.get('returnDate').enable();
      } else {
        this.travelingDetailsForm.get('returnDate').disable();
      }
    });

    this.travelingDetailsForm.get('country').valueChanges.subscribe((country: string) => {
      if (this.travelingDetailsForm.get('country').valid) {
        this.travelingDetailsForm.get('city').enable();
      } else {
        // console.log((this.travelingDetailsForm.get('country').errors));
        this.travelingDetailsForm.get('city').disable();
      }
    })
  }

  // METHODS
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countryNames.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  public onSubmit(): void {

  }

}
