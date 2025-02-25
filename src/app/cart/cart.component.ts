import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'] // ✅ تصحيح الخطأ هنا
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    console.log("🛒 محتوى السلة:", this.cartItems);
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = [...this.cartService.getCartItems()]; // ✅ تحديث القائمة بعد الحذف
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
