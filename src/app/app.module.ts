import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RapifoodAboutComponent } from './rapifood-about/rapifood-about.component';
import { RapifoodFoodsComponent } from './rapifood-foods/rapifood-foods.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodCartComponent,
    InputIntegerComponent,
    RapifoodAboutComponent,
    RapifoodFoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
