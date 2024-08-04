import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IMaterial } from '../../interfaces/i-material';
import { CartService } from '../../services/cart.service';
import { HousingService } from '../../services/housing.service';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-base-material',
  standalone: true,
  imports: [],
  templateUrl: './base-material.component.html',
  styleUrl: './base-material.component.css'
})
export class BaseMaterialComponent {

  @Input() materialHoney!: IMaterial;
  constructor(
    private cartService: CartService,
    public translate: TranslateService,
    private housingService: HousingService,
    private scrollAnimationService: ScrollAnimationService
  ) {

    this.scrollAnimationService.initializeScrollAnimation();

  }

  addToCart(materialId: number): void {
    if (materialId) {
      this.cartService.addMaterialToCart(materialId);
    } else {
      console.error('material ID is undefined');
    }
  }

}
