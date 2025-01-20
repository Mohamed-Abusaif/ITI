import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import { ActivatedRoute, Route } from '@angular/router';
import productsFile from '../../../public/products.json'
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private route: ActivatedRoute) {
    this.idParam = this.route.snapshot.params['id']; 
  }
  idParam: number;
  products: Array<Product> = productsFile.products;
  productInFile: any 
  ngOnInit(): void {

    this.idParam = Number(this.route.snapshot.paramMap.get('id'));


    this.productInFile = this.products.find((productSearch) => productSearch.id === this.idParam);
  }

  
}
