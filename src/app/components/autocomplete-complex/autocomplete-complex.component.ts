import { ITravelingModel } from './../../data/models/traveling.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';

import * as moment from 'moment';
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

  // CONSTRUCTOR
  constructor() {
    this.showMessage = false;
  }

  // LIFE CYCLE HOOKS
  ngOnInit() {
    this.minimumDepartureDate = moment(new Date()).add(1,'days');
    this.travelingDetailsForm = new FormGroup({
      country: new FormControl(null, [ Validators.required ]),
      city: new FormControl({
        value: null,
        disabled: true
      }, [ Validators.required ]),
      departureDate: new FormControl(null, [ Validators.required ]),
      returnDate: new FormControl({
        value: null,
        disabled: true })
    });

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
        this.travelingDetailsForm.get('city').disable();
      }
    })
  }

  // METHODS
  public onSubmit(): void {

  }

}
