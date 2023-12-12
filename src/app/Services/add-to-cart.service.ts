import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  constructor() {}

  items = 0;

  addToCart() {
    this.items++;
  }

  getItems() {
    return this.items;
  }
}
