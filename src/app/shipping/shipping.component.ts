import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.getShippingPrices().subscribe(
      data => {console.log('success', data ),
                this.shippingCosts = data},
      error => console.log('oops', error));
  }

}