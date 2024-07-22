import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHoney } from '../interfaces/honey';
import { RouterModule } from '@angular/router';
import { AddCartComponent } from '../functionalities/add-cart/add-cart.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MOCKHONEYS } from '../../assets/mock/mock-products';
import { CartService } from '../services/cart.service';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    AddCartComponent
  ],


  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})

export class HousingLocationComponent {

  @Input() housingLocation!: IHoney;

  honeys: IHoney[] = MOCKHONEYS;


  constructor(
    private cartService: CartService,
    public translate: TranslateService,
    private housingService: HousingService
  ) {}

  addToCart(honeyId: number): void {
    const honey = this.housingService.getHousingLocationById(honeyId);
    if (honey) {
      this.cartService.addToCart({
        id: honey.id,
        type:honey.type,
        name: honey.name,
        price: honey.price,
        quantity: 1,
        weight: honey.weight || 500,
        photo:honey.photo,
      });
    }
  }

  //TODO
  //Comporbar porque no funcion este metodo
  
  // addToCart(honeyId: number): void {
  //   this.housingService.addToCartHoney(honeyId);

  // }

}
