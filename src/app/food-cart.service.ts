import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from './food-list/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodCartService {
  
  private _cartList: Food[] = [];
  cartList: BehaviorSubject<Food[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(food: Food) {
    let item: Food = this._cartList.find((v1) => v1.nombre == food.nombre);
    if (!item) {
      this._cartList.push({...food});
    }
    else {
      item.quantity += food.quantity;
    }
    this.cartList.next(this._cartList);
  }

  
}
