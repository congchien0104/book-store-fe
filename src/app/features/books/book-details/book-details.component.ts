import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/core/models/book.model';
import { BookService } from 'src/app/core/services/book.service';

// const fakeData: Book = { 
//     id: '1', 
//     title: 'Hydrogen', 
//     image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', 
//     categoryId: 'Neymar', 
//     price: 100000,
//     quantity: 11,
//     description: 'cong chien'
// }

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;
    
  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit() {
    this.titleService.setTitle('book-details');
    this.getBook();
  }

  getBook(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id).subscribe({
      next: data => {
        console.log(data)
        this.book = data;
      }
    });
  }

}
