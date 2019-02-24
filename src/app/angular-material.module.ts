import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatListModule,
  MatIconModule,
  MatSelectModule,
  MatCardModule,
  MatAutocompleteModule,
  MatInputModule
} from '@angular/material'

const ANGULAR_MATERIAL = [
  MatListModule,
  MatIconModule,
  MatSelectModule,
  MatCardModule,
  MatAutocompleteModule,
  MatInputModule
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