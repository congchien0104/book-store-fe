import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';


export interface PeriodicElement {
    id: string;
    title: string;
    image: string;
    category: string;
    price: number;
    quantity: number;
    description: string;
}
  

@Component({
    selector: '<app-cart>',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    displayedColumns: string[] = ['id', 'title', 'image', 'category', 'price', 'quantity'];
    ELEMENT_DATA: PeriodicElement[] = [
        { id: '1', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
        { id: '2', title: 'Hydrogen', image: 'https://www.planetsport.com/image-library/square/500/b/brazil-neymar-celebrates-extra-time-goal-croatia-world-cup-dec22.jpg', category: 'Neymar', price: 100000, quantity: 11, description: 'ok' },
    ];
    
    dataSource = this.ELEMENT_DATA;

    constructor(private cartService: CartService) {}

    items = this.cartService.getItems();

    ngOnInit(): void {
        
    }


    getTotal() {
        return this.ELEMENT_DATA.reduce((i, j) => i + j.price * j.quantity, 0);
    }

}