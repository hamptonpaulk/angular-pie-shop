import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
    standalone: true,
    imports: [RouterLink, NgIf]
})
export class TopBarComponent {
    cart = inject(CartService); // Inject the CartService.

    cartCount = this.cart.cartCount;
}
