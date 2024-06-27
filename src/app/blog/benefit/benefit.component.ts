import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-benefit',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.css'
})
export class BenefitComponent {
  
  constructor(
    public translate: TranslateService
  ){}

}
