import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BenefitComponent } from '../../../benefit/benefit.component';
import { BenefitHerbalHoneyComponent } from './benefit-herbal-honey/benefit-herbal-honey.component';


@Component({
  selector: 'app-blog-herbal-honey',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    BenefitHerbalHoneyComponent
  ],
  templateUrl: './blog-herbal-honey.component.html',
  styleUrl: './blog-herbal-honey.component.css'
})
export class BlogHerbalHoneyComponent {

  constructor(
    public translate: TranslateService
  ) { }
}
