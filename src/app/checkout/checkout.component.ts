import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { CartService } from "../services/cart.service";
import { NgFor, AsyncPipe, CurrencyPipe, NgIf } from '@angular/common';
import { ShippingPrice } from '../models/shippingPrice';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor, RouterLink, AsyncPipe, CurrencyPipe]
})
export class CheckoutComponent {
  private cartService = inject(CartService);
  private router= inject(Router);
  private builder = inject(FormBuilder);
  private toastr = inject(ToastrService);

  items = this.cartService.getItems();
  subtotal = this.cartService.getSubtotal();
  shippingCosts!: Observable<ShippingPrice[]>;
  selectedShipping = { type: '', price: 0 };
  total = 0
  customer = {}

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

  checkoutForm = this.builder.group({
    first_name: ['', [Validators.required, Validators.minLength(2)]],
    last_name: ['', [Validators.required, Validators.minLength(2)]],
    address_1: ['', Validators.required],
    address_2: [''],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip_code: ['', Validators.required],
    country: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
  });

  shippingChange(): void {
    this.total = this.subtotal + this.selectedShipping.price;
	}

  onSubmit(): void {
    //create order
    this.customer = this.checkoutForm.value;
    console.log(this.customer);
    console.log(this.items);
    console.log(this.selectedShipping);
    console.log(this.total);
  

    //clear, reset, and redirect
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.router.navigate(["/"]);
    

    //success
    this.toastr.success('Your order has been submitted!', 'You Did It!'); 
  }
}
