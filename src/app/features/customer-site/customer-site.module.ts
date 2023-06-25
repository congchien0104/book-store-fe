import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { BooksModule } from '../books/books.module';
import { BookItemComponent } from '../books/book-item/book-item.component';
import { CustomerSiteRoutingModule } from './customer-site-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CustomerSiteRoutingModule
  ],
  declarations: [HomePageComponent, CartComponent ]
})
export class CustomerSiteModule { }
