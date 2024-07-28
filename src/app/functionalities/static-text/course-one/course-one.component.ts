import { Component } from '@angular/core';

@Component({
  selector: 'app-course-one',
  standalone: true,
  imports: [],
  templateUrl: './course-one.component.html',
  styleUrl: './course-one.component.css'
})
export class CourseOneComponent {
  showMore: boolean = false;

  toggleContent() {
    this.showMore = !this.showMore;
  }
}
