import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { finalize } from "rxjs";
import { FileUpload } from "src/app/core/models/file-upload.model";
import { BookService } from "src/app/core/services/book.service";
import { CategoryService } from "src/app/core/services/category.service";;

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
    categories?: any[];

    selectedFiles?: FileList;
    currentFileUpload?: FileUpload;
    imageUrl: string;

    constructor(private categoryService: CategoryService,
        private bookService: BookService,
        private storage: AngularFireStorage) {}

    ngOnInit(): void {
        this.retrieveCategories();
    }

    retrieveCategories() {
        this.categoryService.getCategories().subscribe({
            next: (data) => {
                console.log('data: ', data?.data);
                this.categories = data.data;
                console.log('cate: ', this.categories);
            }
        });
    }

    // handle file
    selectFile(event: any):void {
        this.selectedFiles = event.target.files;
    }

    upload(): void {
        if (this.selectedFiles) {
            const file: File | null = this.selectedFiles.item(0)
            this.selectedFiles = undefined;

            if (file) {
                this.currentFileUpload = new FileUpload(file);
                const filePath = `/uploads/${this.currentFileUpload.file.name}`;
                const storageRef = this.storage.ref(filePath);
                const uploadTask = this.storage.upload(filePath, this.currentFileUpload.file);

                uploadTask.snapshotChanges().pipe(
                finalize(() => {
                    storageRef.getDownloadURL().subscribe(downloadURL => {
                        console.log('ok: ', downloadURL);
                        this.imageUrl = downloadURL;
                    });
                })
                ).subscribe();
            }
        }
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        //console.log(this.imageUrl);
        this.bookForm.patchValue({
            image: this.imageUrl
        });
        //console.log('form: ', this.bookForm.value);

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