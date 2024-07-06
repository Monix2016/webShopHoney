import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-validate-step',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './validate-step.component.html',
  styleUrl: './validate-step.component.css'
})
export class ValidateStepComponent {
  @Output() nextStep = new EventEmitter<void>();

  constructor(
    public translate: TranslateService
  ){}

  next(): void {
    this.nextStep.emit();
  }
}
