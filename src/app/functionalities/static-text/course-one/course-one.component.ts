import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-course-one',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './course-one.component.html',
  styleUrl: './course-one.component.css'
})
export class CourseOneComponent {
  showMore: boolean = false;

  toggleContent() {
    this.showMore = !this.showMore;
  }
}
