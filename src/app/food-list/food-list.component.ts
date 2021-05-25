import { Component, OnInit } from '@angular/core';
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
      "stock":100,
      "imagen" : "assets/img/papas.png",
      "clearance" : false,
    },
    {
      "nombre": "MrBurger",
      "ingredientes": "Super Hamburguesa de Ternera con Tomate, Lechuga, Queso Fundido, Huevo Frito y Barbacoa",
      "precio": 200,
      "stock":150,
      "imagen" : "assets/img/hamb.jpg",
      "clearance" : true,
    },
    {
      "nombre": "King of the House",
      "ingredientes": "Super Combo de MrBurger, SuperPotato y gaseosa",
      "precio": 250,
      "stock":0,
      "imagen" : "assets/img/combo.jpg",
      "clearance" : false,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
