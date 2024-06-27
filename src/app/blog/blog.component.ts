import { Component } from '@angular/core';
import { BlogHerbalHoneyComponent } from './blog-herbal-honey/blog-herbal-honey.component';
import { CommonModule } from '@angular/common';
import { BenefitComponent } from './benefit/benefit.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    BlogHerbalHoneyComponent,
    BenefitComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
