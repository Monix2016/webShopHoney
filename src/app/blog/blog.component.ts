import { Component } from '@angular/core';
import { BlogHerbalHoneyComponent } from '../functionalities/static-text/blog-herbal-honey/blog-herbal-honey.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink,

  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  constructor(
    public translate: TranslateService
  ) {}

}
