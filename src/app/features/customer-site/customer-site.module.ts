import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CartsComponent } from './carts/carts.component';
import { BooksModule } from '../books/books.module';
import { BookItemComponent } from '../books/book-item/book-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BooksModule
    //AuthRoutingModule
  ],
  declarations: [HomePageComponent, CartsComponent, BookItemComponent]
})
export class CustomerSiteModule { }
