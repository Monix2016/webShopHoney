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
  currentStep: number = 0;

  constructor() {}

  ngOnInit(): void {}

  goToNextStep(): void {
    if (this.currentStep < 5) {
      this.currentStep++;
    }
  }
}
