import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { BenefitHerbalHoneyComponent } from '../functionalities/static-text/blog-herbal-honey/benefit-herbal-honey/benefit-herbal-honey.component';
import { BlogHerbalHoneyComponent } from '../functionalities/static-text/blog-herbal-honey/blog-herbal-honey.component';

@Component({
  selector: 'app-benefit',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    BlogHerbalHoneyComponent,
  
  ],
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.css'
})
export class BenefitComponent {
  
  constructor(
    public translate: TranslateService
  ){}

}
