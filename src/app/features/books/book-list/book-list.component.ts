import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
import { Book } from 'src/app/core/models/book.model';
import { NotificationService } from 'src/app/core/services/notification.service';

const ELEMENT_DATA: Book[] = [
    { id: '1', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11 },
    { id: '2', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11 },
    { id: '3', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11 },
    { id: '4', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11 },
    { id: '5', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11 },
    { id: '6', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11 },
    { id: '7', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11 },
    { id: '8', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11 },
    { id: '9', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11 },
    { id: '10', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11 },
    { id: '11', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11 },
    { id: '12', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11 },
  ];

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'image', 'category','price', 'quantity', 'details'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;

  constructor(
    private router: Router,
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('angular-material-template - Customers');
    this.logger.log('Customers loaded');
    this.notificationService.openSnackBar('Customers loaded');
    this.dataSource.sort = this.sort;

  }

  bookDetails() {
    this.router.navigate(['/books/book-details']);
  }

  addBook() {
    this.router.navigate(['/books/add-book']);
  }
}


