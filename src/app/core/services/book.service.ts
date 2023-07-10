import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
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

    getBooks (page: number): Observable<any>{
        return this.http.get(`http://localhost:8080/books?page=${page}`, httpOptions);
    }

    getBook (id: string): Observable<any> {
        return this.http.get(`http://localhost:8080/books/${id}`, httpOptions);
    }

    updateBook (id: string, data: Book): Observable<any> {
        return this.http.put(`http://localhost:8080/books/${id}`, data, httpOptions);
    }

    deleteBook (id: string): Observable<any> {
        return this.http.delete(`http://localhost:8080/books/${id}`, httpOptions);
    }
}
