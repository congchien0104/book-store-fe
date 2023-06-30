import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CartService } from 'src/app/core/services/cart.service';
  

@Component({
    selector: '<app-cart>',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    displayedColumns: string[] = ['id', 'title', 'image', 'category', 'price', 'quantity'];
    
    public dataSource = new MatTableDataSource<any>();

    constructor(private cartService: CartService) {}

    ngOnInit(): void {

        this.cartService.carts.subscribe( data => this.dataSource.data = data );
    }


    // getTotal() {
    //     return this.ELEMENT_DATA.reduce((i, j) => i + j.price * j.quantity, 0);
    // }

}