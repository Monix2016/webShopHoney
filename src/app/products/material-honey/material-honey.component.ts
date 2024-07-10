import { Component, Input } from '@angular/core';
import { IMaterial } from '../../interfaces/i-material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ScrollAnimationService } from '../../services/scroll-animation.service';
import { AddCartComponent } from '../../functionalities/add-cart/add-cart.component';
import { CartService } from '../../services/cart.service';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-material-honey',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AddCartComponent
  ],
  templateUrl: './material-honey.component.html',
  styleUrl: './material-honey.component.css'
})
export class MaterialHoneyComponent {
  @Input() materialHoney!: IMaterial;
  constructor(
    private cartService: CartService,
    public translate: TranslateService,
    private housingService: HousingService,
    private scrollAnimationService: ScrollAnimationService
  ) {
    
    this.scrollAnimationService.initializeScrollAnimation();
    
  }

  
  addToCart(honeyId: number): void {
    const materialHoney = this.housingService.getMaterialById(honeyId);
    if (materialHoney) {
      this.cartService.addToCart({
        id: materialHoney.id,
        name: materialHoney.name,
        price: materialHoney.price,
        quantity: 1,
        weight: materialHoney.weight,
      });
    }
  }
}
