import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHoney } from '../interfaces/honey';
import { RouterModule } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MOCKHONEYS } from '../../assets/mock/mock-products';
import { CartService } from '../services/cart.service';
import { HousingService } from '../services/housing.service';
import { BaseHoneyComponent } from '../functionalities/base-honey/base-honey.component';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
   
  ],


  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})

export class HousingLocationComponent extends BaseHoneyComponent {



}
