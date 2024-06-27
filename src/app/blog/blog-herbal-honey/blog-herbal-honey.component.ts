import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BenefitComponent } from '../benefit/benefit.component';

@Component({
  selector: 'app-blog-herbal-honey',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    BenefitComponent
  ],
  templateUrl: './blog-herbal-honey.component.html',
  styleUrl: './blog-herbal-honey.component.css'
})
export class BlogHerbalHoneyComponent {

  constructor(
    public translate: TranslateService
  ) { }
}
