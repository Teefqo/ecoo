import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  confirmPurchase() {
    alert('✅ تم تأكيد الطلب! شكرًا لتسوقك معنا.');
    this.cartService.clearCart();
    this.router.navigate(['/home']);
  }
}
