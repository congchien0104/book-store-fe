import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { concatMap, map, switchMap } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;
  id: string;
    
  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit() {
    this.titleService.setTitle('book-details');
    this.getBook();
  }

  getBook(): void {
    //const id = String(this.route.paramMap.get('id'));
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.id = params.get('id') as string;
    // });

    this.route.params
    .pipe(
      map((param) => param["id"]),
      concatMap((id) => this.bookService.getBook(id))
    )
    .subscribe((response) => {
      this.book = response;
    });
    

    // this.bookService.getBook(this.id).subscribe({
    //   next: data => {
    //     console.log(data)
    //     this.book = data;
    //   }
    // });
  }

}
