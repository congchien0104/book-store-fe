import { Component, OnInit, Input } from "@angular/core";
import { Book } from '../../../core/models/book.model';

@Component({
  selector: "app-book-item",
  templateUrl: "./book-item.component.html",
  styleUrls: ["./book-item.component.css"],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;

  get id(): string {
    return this.book.id;
  }

  constructor() {}

  ngOnInit(): void {}
}