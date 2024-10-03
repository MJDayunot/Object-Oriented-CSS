import {Component, Input, numberAttribute} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true,
  imports: [NgOptimizedImage],
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() productName!: string;
  @Input({transform: numberAttribute}) productPrice!: number; // Changed to number for better handling of price
  @Input() productImage!: string;

  addToCart(productName: string, productPrice: number) {
    console.log(`Added to cart: ${productName} - $${productPrice}`);
    // Implement your cart logic here
  }
}
