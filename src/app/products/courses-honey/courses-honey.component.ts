import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICours } from '../../interfaces/i-courses';

@Component({
  selector: 'app-courses-honey',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './courses-honey.component.html',
  styleUrl: './courses-honey.component.css'
})
export class CoursesHoneyComponent {
  @Input() coursHoney!: ICours;

}
