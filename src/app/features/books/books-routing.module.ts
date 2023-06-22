import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddBookComponent } from './add-book/add-book.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: BookListComponent },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'book-details', component: BookDetailsComponent },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'add-book', component: AddBookComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
