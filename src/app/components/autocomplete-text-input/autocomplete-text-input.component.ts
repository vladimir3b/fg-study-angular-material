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

  // PROPERTIES
  public listOfFoods: Array<IFoodModel>;
  public foodControl: FormControl;
  public filteredFoods: Observable<Array<IFoodModel>>;

  // CONSTRUCTOR
  constructor() {
    this.listOfFoods = FOODS;
    this.foodControl = new FormControl(null, [
      Validators.required
    ]);
  }

  // LIFE CYCLE HOOKS
  public ngOnInit(): void {
    this.filteredFoods = this.foodControl.valueChanges.pipe(
      startWith(''), // without this, it won't show anything before entering the first character in the searching input
      map((value: IFoodModel | string) => typeof value === 'string' ? value : value.name),
      map((value: string) => this._filter(value))
    );
  }

  // METHODS
  private _filter(value: string): Array<IFoodModel> {
    value = value.toLowerCase();
    return this.listOfFoods
      .filter((food: IFoodModel ) => food.name.toLowerCase().indexOf(value) === 0);
  }

  public selectedFood(_id: string): IFoodModel {
    return this.listOfFoods.find((food: IFoodModel) => food._id === _id);
  }

  public displayFunction(food?: IFoodModel): string {
    return food ? food.name : '';
  }

  public chosenFood(): string {
    if (this.foodControl.value) {
      return typeof this.foodControl.value === 'string'  ? this.foodControl.value : this.foodControl.value.name;
    } else {
      return '';
    }
  }

}