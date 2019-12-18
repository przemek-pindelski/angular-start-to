import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    ) { }

  onSubmit(customerData){
    if (this.items.length == 0){
      alert("Your cart is empty");
      return;
    } else 
    if (!customerData.name.length || !customerData.address.length){
      alert("Fill all data");
      return;
    }

    alert("Order will be sent to: " + customerData.name + "\naddress: " + customerData.address);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: [null, Validators.required],
      address: null
    });
  }

}