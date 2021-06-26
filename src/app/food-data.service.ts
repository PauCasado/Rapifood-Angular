import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './food-list/Food';
import { tap, map } from 'rxjs/operators';

const URL = 'https://60bfa93e97295a0017c437ee.mockapi.io/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

  constructor(private http : HttpClient) { }

  public getAll(): Observable<Food[]>{
    return this.http.get<Food[]>(URL)
                    .pipe(tap((foods : Food[]) => foods.forEach(food => food.quantity=0)));
  }
}
