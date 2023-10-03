import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';
import { NgFor, TitleCasePipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    standalone: true,
    imports: [NgFor, RouterLink, TitleCasePipe, CurrencyPipe]
})
export class CartComponent {
  private cartService = inject(CartService);

  items = this.cartService.getItems();
  subtotal = this.cartService.getSubtotal();
}
