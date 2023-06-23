import { Component, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators, FormGroup, FormControl } from "@angular/forms";
import { of } from "rxjs";
import { BookService } from "src/app/core/services/book.service";
import { CategoryService } from "src/app/core/services/category.service";

@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
    bookForm: FormGroup = new FormGroup({
        title: new FormControl(''),
        image: new FormControl(''),
        categoryId: new FormControl(''),
        price: new FormControl(null),
        quantity: new FormControl(null),
        description: new FormControl(''),
    });
    submitted = false;
    categories: any[];

    constructor(private categoryService: CategoryService,
        private bookService: BookService) {}

    ngOnInit(): void {
        this.retrieveCategories();
    }

    retrieveCategories() {
        this.categoryService.getCategories().subscribe({
            next: (data) => {
                console.log('data: ', data);
                //this.categories = data?.data;
            }
        });
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.log(this.bookForm.value);
        this.bookService.addBook(this.bookForm.value)
        .subscribe({
            next: (res) => {
              console.log(res);
              this.submitted = true;
              this.onReset();
            },
            error: (e) => console.error(e)
          });
    }

    onReset(): void {
        this.submitted = false;
        this.bookForm.reset();
    }
}