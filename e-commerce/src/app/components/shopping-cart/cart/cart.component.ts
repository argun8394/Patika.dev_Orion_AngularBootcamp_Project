import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();

    })
  }

  //Loading the selected products into the basket with the Subscribe method
  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      //console.log(this.cartItems)
      this.calcCartTotal();
    })
  }

//Calculate the total price of selected products
  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
