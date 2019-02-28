import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material.module';
import { RoutingModule } from './routing.module';
import { RootComponent } from './components/root/root.component';
import { HomeComponent } from './components/home/home.component';
import { ComboBoxComponent } from './components/combo-box/combo-box.component';
import { MessageComponent } from './components/message/message.component';
import { AutocompleteTextInputComponent } from './components/autocomplete-text-input/autocomplete-text-input.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { PersonalizedInputComponent } from './components/personalized-input/personalized-input.component';
import { RestrictInputDirective } from './directives/restrict-input.directive';
import { AutocompleteComplexComponent } from './components/autocomplete-complex/autocomplete-complex.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { TimeAndDateComponent } from './components/time-and-date/time-and-date.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    RootComponent,
    HomeComponent,
    MessageComponent,
    ComboBoxComponent,
    AutocompleteTextInputComponent,
    TextBoxComponent,
    PersonalizedInputComponent,
    RestrictInputDirective,
    AutocompleteComplexComponent,
    MultiSelectComponent,
    TimeAndDateComponent
  ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
