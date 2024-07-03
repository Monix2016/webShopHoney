import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICours } from '../../interfaces/i-courses';
import { ScrollAnimationService } from '../../services/scroll-animation.service';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(
    public translate: TranslateService,
    private scrollAnimationService: ScrollAnimationService
  ) {
    
    this.scrollAnimationService.initializeScrollAnimation();
    
  }

}
