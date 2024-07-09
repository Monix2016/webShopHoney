import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
    ReactiveFormsModule,
    
    ConfirmationStepComponent,
    ConfirmStepComponent
  ],
  templateUrl: './payment-step.component.html',
  styleUrl: './payment-step.component.css'
})
export class PaymentStepComponent {
  @Output() nextStep = new EventEmitter<void>();
  paymentForm!: FormGroup;
  paymentMethod: string = '';
 

  constructor(
    public translate: TranslateService,
    private personalInfoService: PersonalInfoService,
    private fb: FormBuilder
  ){
    this.paymentMethod = this.personalInfoService.getPaymentMethod();
  }

  ngOnInit(): void {
    
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      expiryDate: ['', [Validators.required, Validators.pattern('(0[1-9]|10|11|12)/[0-9]{2}')]],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]]
    });
  }
   

  onSubmit(): void {
    if (this.paymentForm.valid) {
      // Lógica para enviar los datos del pago
      this.nextStep.emit();
      console.log('Formulario válido, enviando datos:', this.paymentForm.value);
    } else {
      // Marcar todos los campos como tocados para mostrar los mensajes de error
      this.paymentForm.markAllAsTouched();
    }
  }

  next(): void {
    this.nextStep.emit();
  }
}
