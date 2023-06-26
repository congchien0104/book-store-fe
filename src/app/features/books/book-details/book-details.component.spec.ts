// import { BookService } from 'src/app/core/services/book.service';
// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { HttpClientModule } from '@angular/common/http';
// import { BookDetailsComponent } from './book-details.component';
// import { ActivatedRoute, RouterModule } from '@angular/router';
// import {DebugElement} from "@angular/core";
// import {By} from "@angular/platform-browser";
// import { RouterTestingModule } from "@angular/router/testing";

// describe('BookDetailsComponent', () => {
//     let component: BookDetailsComponent;
//     let fixture: ComponentFixture<BookDetailsComponent>;
//     let bookService: BookService;
//     let el: DebugElement;
  
//     beforeEach(() => {

//         // refine the test module by declaring the test component
//         TestBed.configureTestingModule({
//           imports: [HttpClientModule, RouterTestingModule],
//           declarations: [BookDetailsComponent],
//           providers: [BookService]
//         });
    
//         // create component and test fixture
//         fixture = TestBed.createComponent(BookDetailsComponent);
    
//         // get test component from the fixture
//         component = fixture.componentInstance;
    
//         // UserService provided to the TestBed
//         bookService = TestBed.get(BookService);
    
//         //  get the "a" element by CSS selector (e.g., by class name)
//         el = fixture.debugElement.query(By.css('p')); (3)
//       });
  
//      it('should create', () => {
//        expect(component).toBeTruthy();
//      });

//      it('login button hidden when the user is authenticated', () => {
//         expect(el.nativeElement.textContent.trim()).toBe('');
//         fixture.detectChanges();
//         expect(el.nativeElement.textContent.trim()).toBe('Login');
//         spyOn(bookService, 'getBook').and.returnValue('ok');
//         expect(el.nativeElement.textContent.trim()).toBe('Login');
//         fixture.detectChanges();
//         expect(el.nativeElement.textContent.trim()).toBe('Logout');
//       });
// });