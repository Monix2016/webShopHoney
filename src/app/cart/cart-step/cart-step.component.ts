import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ICartitem } from '../../interfaces/i-cartitem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-step',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  templateUrl: './cart-step.component.html',
  styleUrl: './cart-step.component.css'
})
export class CartStepComponent implements OnInit  {
  @Input() cartItems: ICartitem[] = [];
  @Output() nextStep = new EventEmitter<void>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => this.cartItems = items);
  }

  removeItem(itemId: number): void {
    this.cartService.removeFromCart(itemId);
  }

  updateItem(itemId: number, quantity: number, weight: number,price:number): void {
    this.cartService.updateCartItem(itemId, quantity, weight, price);
  }
  updateItemMaterial(itemId: number, quantity: number, price:number): void {
    this.cartService.updateCartItemMaterial(itemId, quantity, price);
  }

  proceedToNextStep(): void {
    this.nextStep.emit();
  }
}
