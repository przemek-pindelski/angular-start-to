import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    //return this.http.get('/assets/shipping.json');
    return this.http.get('http://localhost:8080/getShippingList');
  }

  constructor(
    private http: HttpClient) {}

}