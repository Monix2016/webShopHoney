import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MaterialHoneyComponent } from '../material-honey/material-honey.component';
import { IMaterial } from '../../interfaces/i-material';
import { HousingService } from '../../services/housing.service';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    MaterialHoneyComponent
  ],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
materialList:IMaterial[]=[];
housingService: HousingService = inject(HousingService);


constructor(
  public translate: TranslateService,
  private scrollAnimationService: ScrollAnimationService
){
this.materialList=this.housingService.getAllMaterial();
this.scrollAnimationService.initializeScrollAnimation();
}
}
