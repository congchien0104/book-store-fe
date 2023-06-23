import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CartsComponent } from './carts/carts.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomePageComponent
    //AuthRoutingModule
  ],
  declarations: [HomePageComponent, CartsComponent]
})
export class CustomerSiteModule { }
