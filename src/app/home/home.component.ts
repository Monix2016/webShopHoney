import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { IHoney } from '../interfaces/honey';
import { HousingService } from '../services/housing.service';
import { CoursesHoneyComponent } from '../products/courses-honey/courses-honey.component';
import { ICours } from '../interfaces/i-courses';
import { IMaterial } from '../interfaces/i-material';
import { MaterialHoneyComponent } from '../products/material-honey/material-honey.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollAnimationService } from '../services/scroll-animation.service';
import { ActivitiesComponent } from '../about/activities/activities.component';
import { BaseComponent } from '../functionalities/base/base.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    CoursesHoneyComponent,
    MaterialHoneyComponent,
    TranslateModule,
    ActivitiesComponent
  ], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent extends BaseComponent {




  
}
