import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { HomeComponent } from './components/home/home.component';
import { ComboBoxComponent } from './components/combo-box/combo-box.component';
import { AutocompleteTextInputComponent } from './components/autocomplete-text-input/autocomplete-text-input.component';
import { PersonalizedInputComponent } from './components/personalized-input/personalized-input.component';
import { AutocompleteComplexComponent } from './components/autocomplete-complex/autocomplete-complex.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { TimeAndDateComponent } from './components/time-and-date/time-and-date.component';
import { RealWorldExampleComponent } from './components/real-world-example/real-world-example.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'combo',
    component: ComboBoxComponent
  },
  {
    path: 'text-autocomplete',
    component: AutocompleteTextInputComponent
  },
  {
    path: 'text-box',
    component: TextBoxComponent
  },
  {
    path: 'personalized-input',
    component: PersonalizedInputComponent
  },
  {
    path: 'autocomplete-complex',
    component: AutocompleteComplexComponent
  },
  {
    path: 'multi-select',
    component: MultiSelectComponent
  },
  {
    path: 'time-and-date',
    component: TimeAndDateComponent
  },
  {
    path: 'real-world-example',
    component: RealWorldExampleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: [RealWorldExampleComponent]
})
export class RoutingModule { }
