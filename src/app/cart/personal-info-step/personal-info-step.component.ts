import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PersonalInfoService } from '../../services/personal-info.service';
import { IPersonalInfo } from '../../interfaces/i-personal-info';

@Component({
  selector: 'app-personal-info-step',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './personal-info-step.component.html',
  styleUrl: './personal-info-step.component.css'
})
export class PersonalInfoStepComponent implements OnInit{
  @Output() nextStep = new EventEmitter<void>();
  personalInfoForm!: FormGroup;

  constructor(
    public translate: TranslateService,
    private personalInfoService: PersonalInfoService,
    private fb: FormBuilder
  ) { 

  }

  ngOnInit(): void {
    this.personalInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.email]], // No se requiere Validators.required
      name: ['', Validators.required],
      address: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]], // Validación para un número de teléfono de 10 dígitos
    });
  }
  
  onSubmit(): void {
    if (this.personalInfoForm.valid) {
      const personalInfo: IPersonalInfo = {
        name: this.personalInfoForm.value.name,
        address: this.personalInfoForm.value.address,
        email: this.personalInfoForm.value.email,
        phone: this.personalInfoForm.value.phone,
        paymentMethod: this.personalInfoForm.value.paymentMethod
      };

      this.personalInfoService.setPersonalInfo(personalInfo); // Guardar información en el servicio
      this.nextStep.emit();
    } else {
      this.personalInfoForm.markAllAsTouched(); // Marcar campos como tocados para mostrar errores
    }
  }
}
