import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CartsComponent } from './carts/carts.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  //{ path: '/carts', component: CartsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerSiteRoutingModule { }
