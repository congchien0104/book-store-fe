import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NGXLogger } from 'ngx-logger';
import { Book } from 'src/app/core/models/book.model';
import { NotificationService } from 'src/app/core/services/notification.service';


const ELEMENT_DATA: Book[] = [
    { id: '1', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000 },
    { id: '2', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000 },
    { id: '3', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000 },
    { id: '4', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000 },
    { id: '5', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000 },
    { id: '6', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000 },
    { id: '7', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000 },
    { id: '8', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000 },
    { id: '9', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000 },
    { id: '10', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000 },
    { id: '11', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000 },
    { id: '12', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000 },
  ];

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = ELEMENT_DATA;

  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title
  ) { }

  ngOnInit() {
    //console.log(this.books);
    this.titleService.setTitle('angular-material-template - Books');
    this.logger.log('Books loaded');
  }
}
