import { BookService } from 'src/app/core/services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';

@Component({
    selector: '<app-home-page>',
    templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
    books?: Book[];

    constructor(private bookService: BookService) {}

    ngOnInit(): void {
        this.retrieveBooks();
    }

    retrieveBooks (): void {
        this.bookService.getBooks(0).subscribe({
          next: data => {
            console.log(data);
            //this.dataSource = new MatTableDataSource(data.results);
            this.books = data.results;
            console.log(this.books);
          }
        })
      }
}