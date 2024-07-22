import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { IHoney } from '../../interfaces/honey';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BenefitHerbalHoneyComponent } from '../../functionalities/static-text/blog-herbal-honey/benefit-herbal-honey/benefit-herbal-honey.component';
import { BlogHerbalHoneyComponent } from '../../functionalities/static-text/blog-herbal-honey/blog-herbal-honey.component';
import { HousingLocationComponent } from '../../housing-location/housing-location.component';
import { AddCartComponent } from '../../functionalities/add-cart/add-cart.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    BlogHerbalHoneyComponent,
    HousingLocationComponent,
    AddCartComponent

  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: IHoney | undefined;
  housingLocationList: IHoney[] = [];

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

  addToCart(honeyId: any): void {
    const honey = this.housingService.getHousingLocationById(honeyId);
    if (honey) {
      this.cartService.addToCart({
        id: honey.id,
        type:honey.type,
        name: honey.name,
        price: honey.price,
        quantity: 1,
        weight: honey.weight,
        photo:honey.photo,
      });
    }
  }

    //TODO
  //Comporbar porque no funcion este metodo



  // addToCart(honeyId: number): void {
  //   this.housingService.addToCartHoney(honeyId);

  // }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}
