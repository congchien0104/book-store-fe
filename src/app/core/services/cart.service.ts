import { Injectable } from "@angular/core";
import { Book } from "../models/book.model";
import { BehaviorSubject, Subject } from "rxjs";

const data: Book[] = [
    { id: '1', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    { id: '2', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
];

@Injectable({
    providedIn: 'root'
})
export class CartService {

    items: Book[] = [];
    carts = new BehaviorSubject<any>(this.items);
    carts$ = this.carts.asObservable();

    constructor() {}

    addToCart(book: Book) {
        this.items.push(book);
        this.carts.next(this.items);
    }

    getItems() {
        console.log('getItems: ', this.items);
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }

}