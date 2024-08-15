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
import { StockHoneyComponent } from './stock-honey/stock-honey.component';
import { StockMaterialComponent } from './stock-material/stock-material.component';
import { BaseComponent } from '../functionalities/base/base.component';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    StockHoneyComponent,
    StockMaterialComponent
  ],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent extends BaseComponent {

  
  
}
