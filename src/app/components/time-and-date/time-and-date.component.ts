// https://github.com/kuhnroyal/mat-datetimepicker/issues/37
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  selector: 'fg-time-and-date',
  templateUrl: './time-and-date.component.html',
  styleUrls: ['./time-and-date.component.scss']
})
export class TimeAndDateComponent implements OnInit {

  // PROPERTIES
  public enterDate: FormControl;
  public listItems: Array<string> = [
    'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
    'Football', 'Table Tennis', 'Tennis', 'Volleyball'
  ];

// public value = ['Basketball', 'Cricket'];
public value: string = "123-45-6789";
public mask: string = "000-00-0000";
public maskValidation: boolean = true;

  constructor() { }

  // LIFE CYCLE HOOKS
  public ngOnInit(): void {
    this.enterDate = new FormControl(null, []);
  }

}
