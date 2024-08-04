import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { MaterialComponent } from '../products/material/material.component';
import { CoursComponent } from '../products/cours/cours.component';
import { MaterialHoneyComponent } from '../products/material-honey/material-honey.component';
import { CoursesHoneyComponent } from '../products/courses-honey/courses-honey.component';
import { IHoney } from '../interfaces/honey';
import { ICours } from '../interfaces/i-courses';
import { IMaterial } from '../interfaces/i-material';
import { HousingService } from '../services/housing.service';
import { ScrollAnimationService } from '../services/scroll-animation.service';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HousingLocationComponent,
    MaterialHoneyComponent,
    CoursesHoneyComponent
  ],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
  housingLocationList: IHoney[] = [];
  coursesHoneyList:ICours[]=[];
  materialHoneyList:IMaterial[]=[];

  housingService: HousingService = inject(HousingService);
  filteredLocationList: IHoney[] = [];
  constructor(
    public translate: TranslateService,
    private scrollAnimationService: ScrollAnimationService
  ) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.coursesHoneyList= this.housingService.getAllCourses();
    this.materialHoneyList=this.housingService.getAllMaterial();
    this.filteredLocationList = this.housingLocationList;
 
    
  }

  filterResults(text: string): void {
    this.filteredLocationList = this.housingService.filterResults(text);
  }
}
