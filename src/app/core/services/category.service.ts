import { async } from '@angular/core/testing';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient) {}

    getCategories () : Observable<any> {
        return this.http.get('http://localhost:8080/categories', httpOptions);
    }
}
