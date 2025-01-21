import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  productItem!: Product;
// product: any;

constructor(private router: Router){}

handleRedirect(event: Event, id: number){
  event.preventDefault();
  this.router.navigate(['product-details' , id])
}
}
