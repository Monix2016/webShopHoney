import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HousingService } from '../../../services/housing.service';
import { IMaterial } from '../../../interfaces/i-material';

@Component({
  selector: 'app-details-material',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ],
  templateUrl: './details-material.component.html',
  styleUrl: './details-material.component.css'
})
export class DetailsMaterialComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  materialHoney: IMaterial |undefined;

constructor(){
  const materialId=parseInt(this.route.snapshot.params['id'],10);
  this.materialHoney=this.housingService.getMaterialById(materialId);
}
}
