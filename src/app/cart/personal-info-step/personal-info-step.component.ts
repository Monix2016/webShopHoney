import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
  personalInfo = { name: '', address: '' };


  constructor(
    public translate: TranslateService
  ){}
  onSubmit(): void {
    // Lógica para guardar la información personal
    this.nextStep.emit();
  }
}
