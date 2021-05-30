import { Component, OnInit } from '@angular/core';
import { FoodCartService } from '../food-cart.service';
import {Food} from './Food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  foods: Food [] = [
    {
      "nombre": "SuperPotato",
      "ingredientes": "Papas Fritas con Cheddar y Panceta",
      "precio": 120,
      "stock":10,
      "imagen" : "assets/img/papas.png",
      "clearance" : false,
      "quantity" :0,
    },
    {
      "nombre": "MrBurger",
      "ingredientes": "Super Hamburguesa de Ternera con Tomate, Lechuga, Queso Fundido, Huevo Frito y Barbacoa",
      "precio": 200,
      "stock":20,
      "imagen" : "assets/img/hamb.jpg",
      "clearance" : true,
      "quantity" :0,
    },
    {
      "nombre": "King of the House",
      "ingredientes": "Super Combo de MrBurger, SuperPotato y gaseosa",
      "precio": 250,
      "stock":0,
      "imagen" : "assets/img/combo.jpg",
      "clearance" : false,
      "quantity" :0,
    }
  ];
  
  constructor(private cart: FoodCartService) {}

  ngOnInit(): void {
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
