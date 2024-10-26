import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MOCKHONEYS } from '../../../assets/mock/mock-products';
import { IHoney } from '../../interfaces/honey';
import { CartService } from '../../services/cart.service';
import { HousingService } from '../../services/housing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-honey',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './base-honey.component.html',
  styleUrl: './base-honey.component.css'
})
export class BaseHoneyComponent {
  @Input() housingLocation!: IHoney;

  honeys: IHoney[] = MOCKHONEYS;
  selectedWeight: number = 1000; // Valor por defecto

  constructor(
    private cartService: CartService,
    public translate: TranslateService,
    private housingService: HousingService
  ) { }

  addToCart(honeyId: number): void {
    this.cartService.addHoneyToCart(honeyId, this.selectedWeight);
  }
  getPrice(): number {
    if (this.housingLocation && this.housingLocation.prices && this.housingLocation.prices[this.selectedWeight]) {
      return this.housingLocation.prices[this.selectedWeight];
    }
    return 0;
  }

  getDTO(): number {
    if (this.housingLocation && this.housingLocation.discounts && this.housingLocation.discounts[this.selectedWeight]) {
      return this.housingLocation.discounts[this.selectedWeight];
    }
    return 0;
  }

  //TODO
  //Comporbar porque no funcion este metodo

  // addToCart(honeyId: number): void {
  //   this.housingService.addToCartHoney(honeyId);

  // }

}
