import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MaterialHoneyComponent } from '../material-honey/material-honey.component';
import { IMaterial } from '../../interfaces/i-material';
import { HousingService } from '../../services/housing.service';

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


constructor(public translate: TranslateService){
this.materialList=this.housingService.getAllMaterial();
}
}
