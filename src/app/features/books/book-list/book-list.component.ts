import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
import { Book } from 'src/app/core/models/book.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { BookService } from 'src/app/core/services/book.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

const ELEMENT_DATA: Book[] = [
    { id: '1', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    { id: '2', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    { id: '3', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    { id: '4', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    { id: '5', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    { id: '6', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    { id: '7', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    { id: '8', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    { id: '9', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    { id: '10', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    { id: '11', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    { id: '12', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
  ];

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'image', 'category','price', 'quantity', 'details'];

  dataSource = new MatTableDataSource([]);
  books?: Book[];
  limit: number;
  page: number;
  totalPages: number;
  totalResults: number;

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(
    private router: Router,
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('book-list');
    this.logger.log('Books loaded');
    this.notificationService.openSnackBar('Books loaded');
    this.retrieveBooks();
    this.dataSource.sort = this.sort;
  }

  bookDetails(id: string) {
    this.router.navigate([`/books/book-details/${id}`]);
  }

  addBook() {
    this.router.navigate(['/books/add-book']);
  }

  retrieveBooks (): void {
    const page = this.page || 1;
    this.bookService.getBooks(page).subscribe({
      next: data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data.results);
        this.books = data.results;
        this.limit = data.limit;
        this.page = data.page;
        this.totalPages = data.totalPages;
        this.totalResults = data.totalResults;
        console.log(this.totalPages);
      }
    })
  }

  removeBook (id: string): void {
    this.bookService.deleteBook(id).subscribe({
      next: data => {
        this.notificationService.openSnackBar('delete book successfully');
        this.refreshBookList();
      }
    });
  }

  refreshBookList ():void {
    this.retrieveBooks();
  }

  handlePageEvent(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.retrieveBooks();
    console.log("page: ", event.pageIndex);
    console.log(event.pageSize);
  }

}


