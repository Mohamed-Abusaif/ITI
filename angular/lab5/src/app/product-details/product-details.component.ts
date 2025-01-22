import { Component, OnInit } from "@angular/core";
import { Product } from "../types/product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsRequestService } from "../services/products-request.service"; 
import { Location } from "@angular/common";
import { CommonModule } from "@angular/common";
import { CartService } from '../services/cart.service'; 

@Component({
  selector: "app-product-details",
  imports: [CommonModule],
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  idParam!: number;
  productInFile!: any;

  constructor(
    private route: ActivatedRoute,
    private productsRequestService: ProductsRequestService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idParam = Number(this.route.snapshot.paramMap.get("id"));
    console.log("Product ID:", this.idParam); // Debugging line

    this.productsRequestService.getOneProduct(this.idParam).subscribe({
      next: (product) => {
        console.log("Product fetched:", product); // Debugging line
        this.productInFile = product;
      },
      error: (error) => {
        console.error("Error fetching product:", error);
      },
      complete: () => {
        console.log("Product fetch complete");
      },
    });
  }

  addToCart(): void {
    this.cartService.addProductToCart(this.productInFile);
    this.router.navigate(['/cart']);
  }
}
