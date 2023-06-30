import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { MainLayoutComponent } from '../../shared/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', 
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
    ]
  },
  { path: '', 
    component: MainLayoutComponent,
    children: [
      { path: 'cart', component: CartComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerSiteRoutingModule { }
