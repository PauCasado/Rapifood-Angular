import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodCartService } from '../food-cart.service';
import { Food } from '../food-list/Food';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.scss']
})
export class FoodCartComponent implements OnInit {
  cartList$: Observable<Food[]>;
  constructor(private cart: FoodCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
