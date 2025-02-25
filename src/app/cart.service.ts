import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {}

  // ✅ إضافة منتج إلى السلة
  addToCart(product: any) {
    let item = this.cartItems.find(p => p.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  // ✅ استرجاع المنتجات في السلة
  getCartItems() {
    return this.cartItems;
  }

  // ✅ حذف منتج من السلة
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  // ✅ حساب إجمالي السعر
  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // ✅ تفريغ السلة بعد الشراء
  clearCart() {
    this.cartItems = [];
  }
}
