import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cart-step',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './cart-step.component.html',
  styleUrl: './cart-step.component.css'
})
export class CartStepComponent implements OnInit {
  @Output() nextStep = new EventEmitter<void>();
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      console.log('ITEM ES:', this.cartItems)
    });
  }

  next(): void {
    this.nextStep.emit();
  }
}
