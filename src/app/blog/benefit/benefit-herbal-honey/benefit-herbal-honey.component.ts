import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-benefit-herbal-honey',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './benefit-herbal-honey.component.html',
  styleUrl: './benefit-herbal-honey.component.css'
})
export class BenefitHerbalHoneyComponent {
  constructor(
    public translate: TranslateService
  ){}
}
