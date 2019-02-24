import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatIconModule,
  MatSelectModule,
  MatCardModule,
  MatAutocompleteModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';

const ANGULAR_MATERIAL = [
  MatListModule,
  MatIconModule,
  MatSelectModule,
  MatCardModule,
  MatAutocompleteModule,
  MatInputModule,
  MatToolbarModule,
  FlexLayoutModule
]

@NgModule({
  imports: [
    ...ANGULAR_MATERIAL
  ],
  exports: [
    ...ANGULAR_MATERIAL
  ]
})
export class AngularMaterialModule { }