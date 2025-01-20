import { Component } from '@angular/core';
import productList from "../../../public/products.json"
import { CardComponent } from "../card/card.component";
import { Product } from '../types/product';
import { Router } from '@angular/router';
import productsFile from '../../../public/products.json'

@Component({
  selector: 'app-list',
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products: Array<Product> = productsFile.products;
constructor(private router: Router) {}

  viewProductDetails(productId: number) {
    // Navigating to the product-details route with the product ID in the URL
    this.router.navigate(['/product-details', productId]);
  }
}
