import { Component, OnInit, TrackByFunction } from "@angular/core";
import { CartService } from "../services/cart.service"; // Adjust the path as necessary
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
  imports: [CommonModule],
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cartCount = this.cartService.getCartCount();
    console.log("Cart contents:", this.cart); // Log the cart contents
  }

  increaseQuantity(item: any): void {
    this.cartService.updateProductQuantity(item, item.quantity + 1);
    this.refreshCart();
  }

  decreaseQuantity(item: any): void {
    this.cartService.updateProductQuantity(item, item.quantity - 1);
    this.refreshCart();
  }

  removeFromCart(item: any): void {
    this.cartService.removeProductFromCart(item);
    this.refreshCart();
  }

  private refreshCart(): void {
    this.cart = this.cartService.getCart();
    this.cartCount = this.cartService.getCartCount();
  }
}
