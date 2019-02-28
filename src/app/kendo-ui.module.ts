import { NgModule } from '@angular/core';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {
  MaskedTextBoxModule,
  NumericTextBoxModule,
  SliderModule,
  TextBoxModule,
  SwitchModule,
  InputsModule
} from '@progress/kendo-angular-inputs';

const KENDO_UI = [
  InputsModule,
  DropDownsModule,
  DateInputsModule,
  MaskedTextBoxModule,
  NumericTextBoxModule,
  SliderModule,
  SwitchModule,
  TextBoxModule
];

@NgModule({
  imports: [
    ...KENDO_UI
  ],
  exports: [
    ...KENDO_UI
  ]
})
export class KendoUiModule { }
