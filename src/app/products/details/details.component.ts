import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { IHoney } from '../../interfaces/honey';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BenefitHerbalHoneyComponent } from '../../functionalities/static-text/blog-herbal-honey/benefit-herbal-honey/benefit-herbal-honey.component';
import { BlogHerbalHoneyComponent } from '../../functionalities/static-text/blog-herbal-honey/blog-herbal-honey.component';
import { HousingLocationComponent } from '../../housing-location/housing-location.component';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    BlogHerbalHoneyComponent,
    HousingLocationComponent,
   

  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation?: IHoney;
  housingLocationList: IHoney[] = [];
  selectedWeight: number = 1000; // Valor por defecto

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(public translate: TranslateService,
    private cartService: CartService,
  ) {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
    this.housingLocationList = this.housingService.getAllHousingLocations();
    


  }
  addToCart(honeyId?: number): void {
    this.cartService.addHoneyToCart(honeyId, this.selectedWeight);
  }

  getPrice(): number {
    return this.housingLocation?.prices[this.selectedWeight] || 0;
  }


}
