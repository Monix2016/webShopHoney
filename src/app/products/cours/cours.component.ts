import { CommonModule } from '@angular/common';
import { Component, Input, inject, input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CoursesHoneyComponent } from '../courses-honey/courses-honey.component';
import { ICours } from '../../interfaces/i-courses';
import { HousingService } from '../../services/housing.service';
import { ITeam } from '../../interfaces/i-team';
import { CoursTeamComponent } from '../courses-honey/cours-team/cours-team.component';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    CoursesHoneyComponent,
    CoursTeamComponent
  ],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent {
  coursesHoneyList:ICours[]=[];
  team: ITeam[] = [];
  housingService: HousingService = inject(HousingService);

  constructor(
    public translate: TranslateService,
    private scrollAnimationService: ScrollAnimationService
  ){
    this.coursesHoneyList= this.housingService.getAllCourses();
    this.team = this.housingService.getTeam();
    this.scrollAnimationService.initializeScrollAnimation();
  }
}
