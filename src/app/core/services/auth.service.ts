import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';

import { environment } from '../../../environments/environment';
import { of, EMPTY, Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient,
        @Inject('LOCALSTORAGE') private localStorage: Storage) {
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post(AUTH_API + 'login', {
          email,
          password
        }, httpOptions);
    }
    
    register(name: string, email: string, password: string): Observable<any> {
        return this.http.post(AUTH_API + 'register', {
          name,
          email,
          password
        }, httpOptions);
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.localStorage.clear();
    }

    getCurrentUser(): any {
        // TODO: Enable after implementation
        // return JSON.parse(this.localStorage.getItem('currentUser'));
    }
}
