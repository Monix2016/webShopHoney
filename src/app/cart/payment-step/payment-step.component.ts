import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-payment-step',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  templateUrl: './payment-step.component.html',
  styleUrl: './payment-step.component.css'
})
export class PaymentStepComponent {
  @Output() nextStep = new EventEmitter<void>();
  paymentInfo = { cardNumber: '', expiryDate: '' };

  constructor(
    public translate: TranslateService
  ){}

  onSubmit(): void {
    // Lógica para procesar el pago
    this.nextStep.emit();
  }
}
