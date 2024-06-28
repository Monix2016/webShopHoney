import { Component } from '@angular/core';
import { BlogHerbalHoneyComponent } from '../functionalities/static-text/blog-herbal-honey/blog-herbal-honey.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    BlogHerbalHoneyComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
