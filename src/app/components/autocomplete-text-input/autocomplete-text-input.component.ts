import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { FOODS } from './../../data/foods.data';
import { IFoodModel } from './../../data/models/food.model';

@Component({
  selector: 'fg-autocomplete-text-input',
  templateUrl: './autocomplete-text-input.component.html',
  styleUrls: ['./autocomplete-text-input.component.scss']
})
export class AutocompleteTextInputComponent implements OnInit {

  public listOfFoods: Array<IFoodModel>;
  public foodControl: FormControl;
  public filteredFoods: Observable<Array<IFoodModel>>;

  constructor() { 
    this.listOfFoods = FOODS;
    this.foodControl = new FormControl(null, [
      Validators.required
    ]);
  }

  ngOnInit() {
    this.filteredFoods = this.foodControl.valueChanges.pipe(
      startWith(''),
      map((value: string)=> this._filter(value))
    );
  }

  private _filter(value: string): Array<IFoodModel> {
    const filterValue: string = value.toLowerCase();
    return this.listOfFoods;
      // .filter((food: IFoodModel )=> food.name.toLowerCase().indexOf(filterValue) === 0);
  
}

  public selectedFood(): IFoodModel {
    return this.listOfFoods.find((food: IFoodModel) => food._id === this.foodControl.value);     
  }
}