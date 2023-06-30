import { CartService } from './../../../core/services/cart.service';
import { BookService } from 'src/app/core/services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';
import { Router } from '@angular/router';

@Component({
    selector: '<app-home-page>',
    templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
    books?: Book[];

    constructor(private router: Router,
      private bookService: BookService,
      private cartService: CartService) {}

    ngOnInit(): void {
        this.retrieveBooks();
    }

    retrieveBooks (): void {
        this.bookService.getBooks(1).subscribe({
          next: data => {
            console.log(data);
            //this.dataSource = new MatTableDataSource(data.results);
            this.books = data.results;
            console.log(this.books);
          }
        })
    }

    bookDetails(id: string) {
      this.router.navigate([`/customer/b/cart`]);
    }

    addToCart(book: Book) {
      this.cartService.addToCart(book);
      this.router.navigate([`/customer/cart`]);
    }
  
}