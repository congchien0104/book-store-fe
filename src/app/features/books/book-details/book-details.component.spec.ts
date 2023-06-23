// import { BookService } from 'src/app/core/services/book.service';
// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { HttpClientModule } from '@angular/common/http';
// import { BookDetailsComponent } from './book-details.component';
// import { ActivatedRoute, RouterModule } from '@angular/router';

// class MockBookService {
//     getBook() {
//         const id = '1';
//         return {
//             id: '1',
//             title: 'Leo',
//             image: 'image url',
//             category: 'Messi',
//             price: 200000,
//             quantity: 10,
//             description: 'He is the best player in the world'
//         }
//     }
// }

// describe('BookDetailsComponent', () => {
//     let component: BookDetailsComponent;
//     let fixture: ComponentFixture<BookDetailsComponent>;
  
//     beforeEach(waitForAsync(() => {
//       TestBed.configureTestingModule({
//         imports: [HttpClientModule, RouterModule.forRoot([])],
//         declarations: [BookDetailsComponent],
//         providers: [
//             {provide: BookService, useClass: MockBookService },
//         ],
//       })
//       .compileComponents();
//     }));
  
//     beforeEach(() => {
//       fixture = TestBed.createComponent(BookDetailsComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();
//     });
  
//      it('should create', () => {
//        expect(component).toBeTruthy();
//      });
// });