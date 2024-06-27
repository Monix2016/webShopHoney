import { Component } from '@angular/core';
import { BlogHerbalHoneyComponent } from './blog-herbal-honey/blog-herbal-honey.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    BlogHerbalHoneyComponent,
    CommonModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
