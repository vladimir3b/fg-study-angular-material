import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FOODS } from './../../data/foods.data';
import { IFoodModel } from './../../data/models/food.model';

@Component({
  selector: 'fg-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss']
})
export class ComboBoxComponent implements OnInit {

  public listOfFoods: Array<IFoodModel>;
  public foodControl: FormControl;

  constructor() { 
    this.listOfFoods = FOODS;
    this.foodControl = new FormControl(null, [
      Validators.required
    ]);
  }

  ngOnInit() {
  }

  public selectedFood(): IFoodModel {
    return this.listOfFoods.find((food: IFoodModel) => food._id === this.foodControl.value);     
  }

}