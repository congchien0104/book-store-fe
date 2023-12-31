import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookItemComponent } from './book-item/book-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule,
  ],
  declarations: [BookListComponent, BookItemComponent, BookDetailsComponent, AddBookComponent, UpdateBookComponent]
})
export class BooksModule { }
