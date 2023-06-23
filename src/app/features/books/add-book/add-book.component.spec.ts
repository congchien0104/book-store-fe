import { CategoryService } from 'src/app/core/services/category.service';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AddBookComponent } from './add-book.component';
import { HttpClientModule } from '@angular/common/http';

class MockCategoryService {
    getCategories() {
        return 1;
    }
    addBook() {
        return {
            id: '1',
            title: 'Leo',
            image: 'image url',
            category: 'Messi',
            price: 200000,
            quantity: 10,
            description: 'He is the best player in the world'
        }
    }
}

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let categoryService: CategoryService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
        declarations: [AddBookComponent],
        providers: [ AddBookComponent, { CategoryService, useClass: MockCategoryService}]
    }).compileComponents();
  }));

  beforeEach(() => {
    
    component = TestBed.inject(AddBookComponent);
    categoryService = TestBed.inject(CategoryService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create book', () => {
    const cate = categoryService.getCategories().subscribe();
    expect(cate).toBeDefined();
    expect(cate).toBeTruthy();
  })
});