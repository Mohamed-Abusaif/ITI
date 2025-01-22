import { Component } from "@angular/core";
import productList from "../../../public/products.json";
import { CardComponent } from "../card/card.component";
import { Product } from "../types/product";
import { Router } from "@angular/router";
import productsFile from "../../../public/products.json";
import { ProductsRequestService } from "../services/products-request.service";

@Component({
  selector: "app-list",
  imports: [CardComponent],
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.css",
})
export class ListComponent {
  products: any;
  // products: Array<Product> = productsFile.products;
  constructor(
    private router: Router,
    private productsReqestsService: ProductsRequestService
  ) {}

  ngOnInit(): void {
    this.productsReqestsService
      .getProductsList()
      .subscribe((res) => this.products = res.products);
  }

  viewProductDetails(productId: number) {
    // Navigating to the product-details route with the product ID in the URL
    this.router.navigate(["/product-details", productId]);
  }
}
