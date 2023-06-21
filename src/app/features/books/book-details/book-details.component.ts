import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Book } from 'src/app/core/models/book.model';

const fakeData: Book = { 
    id: '1', 
    title: 'Hydrogen', 
    image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', 
    category: 'Neymar', 
    price: 100000 
}

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    book: Book = fakeData;
    
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Chien Neymar');
  }

}
