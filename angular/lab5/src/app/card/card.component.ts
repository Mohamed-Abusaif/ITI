import { Component, Input } from "@angular/core";
import { Product } from "../types/product";
import { Router } from "@angular/router";
import { CartService } from "../services/cart.service"; // Adjust the path as necessary

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input()
  productItem!: Product;

  constructor(private cartService: CartService, private router: Router) {}

  handleRedirect(event: Event, productId: number): void {
    event.preventDefault();
    // Implement your redirect logic here
  }

  addToCart(product: any): void {
    this.cartService.addProductToCart(product);
    console.log("Product added to cart:", product); // Debugging line
    this.router.navigate(["/cart"]);
  }
}
