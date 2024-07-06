import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-confirmation-step',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ],
  templateUrl: './confirmation-step.component.html',
  styleUrl: './confirmation-step.component.css'
})
export class ConfirmationStepComponent {
  constructor(
    public translate: TranslateService
  ){}

}
