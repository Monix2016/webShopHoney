import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IPersonalInfo } from '../../interfaces/i-personal-info';
import { PersonalInfoService } from '../../services/personal-info.service';
import { ConfirmationStepComponent } from '../confirmation-step/confirmation-step.component';
import { ConfirmStepComponent } from '../confirm-step/confirm-step.component';

@Component({
  selector: 'app-payment-step',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ConfirmationStepComponent,
    ConfirmStepComponent
  ],
  templateUrl: './payment-step.component.html',
  styleUrl: './payment-step.component.css'
})
export class PaymentStepComponent {
  @Output() nextStep = new EventEmitter<void>();
  paymentInfo = { cardNumber: '', expiryDate: '' };
  paymentMethod: string = '';
 

  constructor(
    public translate: TranslateService,
    private personalInfoService: PersonalInfoService
  ){

  }

  ngOnInit(): void {
    this.paymentMethod = this.personalInfoService.getPaymentMethod();
    console.log('el metodo de pago es:',this.paymentMethod)
  }
   

 

  onSubmit(): void {
    // Lógica para procesar el pago
    this.nextStep.emit();
  }

  next(): void {
    this.nextStep.emit();
  }
}
