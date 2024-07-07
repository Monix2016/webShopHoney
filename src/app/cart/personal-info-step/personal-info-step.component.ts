import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PersonalInfoService } from '../../services/personal-info.service';
import { IPersonalInfo } from '../../interfaces/i-personal-info';

@Component({
  selector: 'app-personal-info-step',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  templateUrl: './personal-info-step.component.html',
  styleUrl: './personal-info-step.component.css'
})
export class PersonalInfoStepComponent {
  @Output() nextStep = new EventEmitter<void>();
  personalInfo:IPersonalInfo = {
    name: '',
    address: '',
    email: '',
    phone: ''
  };


  constructor(
    public translate: TranslateService,
    private personalInfoService: PersonalInfoService
  ) { }
  onSubmit(): void {
    // Guardar la información personal en el servicio
    this.personalInfoService.setPersonalInfo(this.personalInfo);
    // Emitir el evento para pasar al siguiente paso
    this.nextStep.emit();
  }
}
