import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { IHoney } from '../interfaces/honey';
import { HousingService } from '../services/housing.service';
import { CoursesHoneyComponent } from '../products/courses-honey/courses-honey.component';
import { ICours } from '../interfaces/i-courses';
import { IMaterial } from '../interfaces/i-material';
import { MaterialHoneyComponent } from '../products/material-honey/material-honey.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    CoursesHoneyComponent,
    MaterialHoneyComponent,
    TranslateModule
  ], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  housingLocationList: IHoney[] = [];
  coursesHoneyList:ICours[]=[];
  materialHoneyList:IMaterial[]=[];

  housingService: HousingService = inject(HousingService);
  filteredLocationList: IHoney[] = [];
  constructor(public translate: TranslateService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.coursesHoneyList= this.housingService.getAllCourses();
    this.materialHoneyList=this.housingService.getAllMaterial();
    this.filteredLocationList = this.housingLocationList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
