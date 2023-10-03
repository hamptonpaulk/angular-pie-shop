import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';
import { Injectable, inject, signal } from '@angular/core';
import { ShippingPrice } from '../models/shippingPrice';

@Injectable({
  providedIn: 'root' // This service is provided in the root injector for your app and should be available globally.
})
export class CartService {
  private http = inject(HttpClient); // Inject HttpClient to make HTTP requests.
  items: Product[] = []; // Array to hold the items in the cart.
  cartCount = signal<number>(0); //use signal to create a reactive variable

  // Method to add a product to the cart.
  addToCart(product: Product) {
    this.items.push(product); // Add the product to the items array.
    this.cartCount.set(this.items.length); // Update the cart count signal.
  }

  // Method to get the items in the cart.
  getItems() {
    return this.items;
  }

  // Method to clear the cart.
  clearCart() {
    this.items = []; // Empty the items array.
    this.cartCount.set(0); // clear the cart count signal.
    return this.items;
  }

  // Method to get the shipping prices from a JSON file.
  getShippingPrices() {
    return this.http.get<ShippingPrice[]>('./assets/shipping.json');
  }

  // Method to get the subtotal of the items in the cart.
  getSubtotal() {
    return this.items.reduce((sum, item) => sum + item.price , 0); // Use reduce to sum up the prices of the items in the cart.
  }
}
