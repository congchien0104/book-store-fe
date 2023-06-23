import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from 'src/app/core/services/book.service';
import { NotificationService } from 'src/app/core/services/notification.service';

class MockBookService {
    page : 1;
    getBooks() {
        return {}
    }
}

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let bookService: BookService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
        declarations: [BookListComponent],
        providers: [ BookListComponent, {provide: BookService, useClass: MockBookService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    
    component = TestBed.inject(BookListComponent);
    bookService = TestBed.inject(BookService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create book', () => {
    const page = 1;
    const cate = bookService.getBooks(page).subscribe();
    expect(cate).toBeDefined();
    expect(cate).toBeTruthy();
  })
});