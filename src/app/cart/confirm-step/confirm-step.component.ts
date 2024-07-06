import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-confirm-step',
  standalone: true,
  imports: [
    TranslateModule,
  ],
  templateUrl: './confirm-step.component.html',
  styleUrl: './confirm-step.component.css'
})
export class ConfirmStepComponent {
  @Output() nextStep = new EventEmitter<void>();
  constructor(
    public translate: TranslateService
  ){}

  next(): void {
    this.nextStep.emit();
  }
}
