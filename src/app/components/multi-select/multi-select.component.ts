import { Component, OnInit } from '@angular/core';
import { COUNTRY_NAMES } from './../../data/countries.data';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'fg-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  public selectCountryForm: FormControl;
  public countriesList: Array<string>;

  constructor() {
    this.selectCountryForm = new FormControl();
    this.countriesList = COUNTRY_NAMES;
   }

  ngOnInit() {
  }

}
