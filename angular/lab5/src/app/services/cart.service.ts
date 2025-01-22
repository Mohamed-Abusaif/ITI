import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() { }

  addProductToCart(product: any): void {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeProductFromCart(product: any): void {
    this.cart = this.cart.filter(item => item.id !== product.id);
  }

  updateProductQuantity(product: any, quantity: number): void {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = quantity;
      if (existingProduct.quantity <= 0) {
        this.removeProductFromCart(existingProduct);
      }
    }
  }

  getCart(): any[] {
    return this.cart;
  }

  getCartCount(): number {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }
}
