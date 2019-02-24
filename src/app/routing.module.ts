import { NgModule } from '@angular/core';
import { 
  Routes, 
  RouterModule 
} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComboBoxComponent } from './components/combo-box/combo-box.component';
import { AutocompleteTextInputComponent } from './components/autocomplete-text-input/autocomplete-text-input.component';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }