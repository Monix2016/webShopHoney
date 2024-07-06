import { Component } from '@angular/core';
import { IArticle } from '../../interfaces/i-article';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-cart',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './add-cart.component.html',
  styleUrl: './add-cart.component.css'
})
export class AddCartComponent {
  products: IArticle[]= [
    // Ejemplo de productos, deberías cargar esto desde una API o servicio
    { id: 1, name: 'Miel', description: 'Miel pura de abeja', price: 10, image: 'path-to-image' }
  ];


  constructor(
    private cartService: CartService,
    public translate: TranslateService
  ) {}

  addToCart(product: IArticle): void {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

}
