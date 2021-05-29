import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RapifoodAboutComponent } from './rapifood-about/rapifood-about.component';
import { RapifoodFoodsComponent } from './rapifood-foods/rapifood-foods.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'foods',
    pathMatch: 'full'
  },
  {
    path: 'foods',
    component: RapifoodFoodsComponent
  },
  {
    path: 'about',
    component: RapifoodAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
