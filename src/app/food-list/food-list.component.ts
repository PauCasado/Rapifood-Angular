import { Component, OnInit } from '@angular/core';
import { FoodCartService } from '../food-cart.service';
import { FoodDataService } from '../food-data.service';
import {Food} from './Food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  foods: Food [] = [];
  
  constructor(
    private cart: FoodCartService,
    private foodsDataService: FoodDataService,
  ){}

  ngOnInit(): void {
    this.foodsDataService.getAll().subscribe(foods => this.foods = foods);
  }
  maxReached(b: boolean) {
    alert("Se alcanzó, o superó, la cantidad máxima de comida.");
  }
    
  addToCart(food: Food):void {
    this.cart.addToCart(food);
    food.stock -= food.quantity;
    food.quantity = 0;
  }
}
