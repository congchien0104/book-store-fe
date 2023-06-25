import { Injectable } from "@angular/core";
import { Book } from "../models/book.model";

const data: Book[] = [
    { id: '1', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    { id: '2', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', categoryId: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
];

@Injectable({
    providedIn: 'root'
})
export class CartService {

    items: Book[] = [];

    constructor() {}

    addToCart(book: Book) {
        this.items.push(book);
        console.log('add to cart ok');
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