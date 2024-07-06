import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { CartStepComponent } from './cart-step/cart-step.component';
import { ValidateStepComponent } from './validate-step/validate-step.component';
import { PaymentStepComponent } from './payment-step/payment-step.component';
import { ConfirmStepComponent } from './confirm-step/confirm-step.component';
import { ConfirmationStepComponent } from './confirmation-step/confirmation-step.component';
import { PersonalInfoStepComponent } from './personal-info-step/personal-info-step.component';
import { ICartitem } from '../interfaces/i-cartitem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,

    PaymentStepComponent,
    ConfirmStepComponent,
    ConfirmationStepComponent,
    PersonalInfoStepComponent,
    CartStepComponent,
    ValidateStepComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  currentStep = 1;
  cartItems : ICartitem[]=[]; // Tipar el array con la interfaz
  errorMessage: string = '';



  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(
      items => this.cartItems = items,
      error => this.errorMessage = 'Error loading cart items'
    );
  }

  nextStep(): void {
    if (this.isStepValid()) {
      this.currentStep++;
    } else {
      this.errorMessage = 'Please complete the current step before proceeding';
    }
  }

  isStepValid(): boolean {
    // Add your step validation logic here
    return true;
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isCartEmpty(): boolean {
    return this.cartService.isCartEmpty();
  }
}
