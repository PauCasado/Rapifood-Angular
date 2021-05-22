import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  food = {
    "nombre": "SuperPotato",
    "ingredientes": "Papas Fritas con Cheddar y Panceta",
    "precio": 120,
    "stock":100,
    "imagen" : "assets/img/papas.png"
  };
  food1 = {
    "nombre": "MrBurger",
    "ingredientes": "Super Hamburguesa de Ternera con Tomate, Lechuga, Queso Fundido, Huevo Frito y Barbacoa",
    "precio": 200,
    "stock":150,
    "imagen" : "assets/img/hamb.jpg"
  };
  food2 = {
    "nombre": "King of the House",
    "ingredientes": "Super Combo de MrBurger, SuperPotato y gaseosa",
    "precio": 250,
    "stock":100,
    "imagen" : "assets/img/combo.jpg"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
