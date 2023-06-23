import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor(private http: HttpClient) {}

    addBook (params: Book) {
        return this.http.post('http://localhost:8080/books', params, httpOptions);
    }

    getBooks (): Observable<any>{
        return this.http.get('http://localhost:8080/books', httpOptions);
    }

    deleteBook (id: string) {
        return this.http.delete(`http://localhost:8080/books/${id}`, httpOptions);
    }
}
