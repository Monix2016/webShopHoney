import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHoney } from '../interfaces/honey';
import { RouterModule } from '@angular/router';

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
   
  ],


  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})

export class HousingLocationComponent {

  @Input() housingLocation!: IHoney;

  honeys: IHoney[] = MOCKHONEYS;
  selectedWeight: number = 1000; // Valor por defecto

  constructor(
    private cartService: CartService,
    public translate: TranslateService,
    private housingService: HousingService
  ) {}

  addToCart(honeyId: number): void {
    this.cartService.addHoneyToCart(honeyId, this.selectedWeight);
  }
  getPrice(): number {
    return this.housingLocation.prices[this.selectedWeight] || 0;
  }


  //TODO
  //Comporbar porque no funcion este metodo
  
  // addToCart(honeyId: number): void {
  //   this.housingService.addToCartHoney(honeyId);

  // }

}
