import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatIconModule,
  MatSelectModule,
  MatCardModule,
  MatAutocompleteModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatDatepickerModule,
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FlexLayoutModule } from '@angular/flex-layout';

const ANGULAR_MATERIAL = [
  MatListModule,
  MatIconModule,
  MatSelectModule,
  MatCardModule,
  MatAutocompleteModule,
  MatInputModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatButtonModule,
  MatDatepickerModule,
  MatMomentDateModule,
];

@NgModule({
  imports: [
    ...ANGULAR_MATERIAL
  ],
  exports: [
    ...ANGULAR_MATERIAL
  ]
})
export class AngularMaterialModule { }
