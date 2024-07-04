import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HousingService } from '../../../services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { ICours } from '../../../interfaces/i-courses';
import { CoursTeamComponent } from '../cours-team/cours-team.component';
import { ITeam } from '../../../interfaces/i-team';
import { CoursesHoneyComponent } from '../courses-honey.component';

@Component({
  selector: 'app-details-cours',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    CoursTeamComponent,
    CoursesHoneyComponent
  ],
  templateUrl: './details-cours.component.html',
  styleUrl: './details-cours.component.css'
})
export class DetailsCoursComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  coursHoney:ICours | undefined;
  team: ITeam[] = [];
  coursesHoneyList:ICours[]=[];

  
  constructor(public translate: TranslateService) {
    const coursId = parseInt(this.route.snapshot.params['id'], 10);
    this.coursHoney = this.housingService.getCoursById(coursId);
    this.team = this.housingService.getTeam();
    this.coursesHoneyList= this.housingService.getAllCourses();
    

  }
}
