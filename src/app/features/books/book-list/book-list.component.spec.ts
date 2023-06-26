import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Book } from 'src/app/core/models/book.model';
import { BookService } from 'src/app/core/services/book.service';
import { HttpClientModule } from '@angular/common/http';



const expectedBooks: Book[] = [{
  id: '1',
  title: 'test 1',
  categoryId: 'drama',
  description: '',
  image: '',
  price: 1,
  quantity: 1
}, {
  id: '2',
  title: 'test 2',
  categoryId: 'drama',
  description: '',
  image: '',
  price: 2,
  quantity: 2
}];

class MockBookService {
  getBooks(): Observable<any> {
    return new Observable((observer) => observer.next(expectedBooks)).pipe(delay(1000))
  }

  deleteBook(id: string): Observable<any> {
    return new Observable((observer) => observer.next()).pipe(delay(1000))
  }
}

describe('Component: Login', () => {

    let component: BookListComponent;
    let fixture: ComponentFixture<BookListComponent>;
    let bookService: BookService;
    let componentService: BookService;
    let submitEl: DebugElement;
    let loginEl: DebugElement;
    let passwordEl: DebugElement;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [BookListComponent],
            imports: [HttpClientModule],
            providers: [BookListComponent, {provide: BookService, useClass: MockBookService }],
        });


        // create component and test fixture
        fixture = TestBed.createComponent(BookListComponent);

        // get test component from the fixture
        component = fixture.componentInstance;

        // BookService provided to the TestBed
        bookService = TestBed.get(BookService);
        // BookService provided by Component, (should return MockBookService)
        componentService = fixture.debugElement.injector.get(BookService);

        submitEl = fixture.debugElement.query(By.css('button'));
        loginEl = fixture.debugElement.query(By.css('input[type=email]'));
        passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
    });

    // Test Service
    it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
        inject([BookService], (injectService: BookService) => {
            expect(injectService).toBe(bookService);
        })
    );

    it('Service injected via component should be and instance of MockBookService', () => {
      expect(componentService instanceof MockBookService).toBeTruthy();
   });

    // it('Setting enabled to false disabled the submit button', () => {
    //     component.enabled = false;
    //     fixture.detectChanges();
    //     expect(submitEl.nativeElement.disabled).toBeTruthy();
    // });

    // it('Setting enabled to true enables the submit button', () => {
    //     component.enabled = true;
    //     fixture.detectChanges();
    //     expect(submitEl.nativeElement.disabled).toBeFalsy();
    // });

    // it('Entering email and password emits loggedIn event', () => {
    //     let user: User;
    //     loginEl.nativeElement.value = "test@example.com";
    //     passwordEl.nativeElement.value = "123456";

    //     // Subscribe to the Observable and store the user in a local variable.
    //     component.loggedIn.subscribe((value) => user = value);

    //     // This sync emits the event and the subscribe callback gets executed above
    //     submitEl.triggerEventHandler('click', null);

    //     // Now we can check to make sure the emitted value is correct
    //     expect(user.email).toBe("test@example.com");
    //     expect(user.password).toBe("123456");
    // });
});