import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HousingService } from '../../../services/housing.service';
import { IMaterial } from '../../../interfaces/i-material';
import { MaterialHoneyComponent } from '../material-honey.component';

import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-details-material',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    MaterialHoneyComponent,
  
  ],
  templateUrl: './details-material.component.html',
  styleUrl: './details-material.component.css'
})
export class DetailsMaterialComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  materialHoney: IMaterial | undefined;
  materialList: IMaterial[] = [];

  constructor(
    public translate: TranslateService,
    private cartService: CartService,
  ) {
    const materialId = parseInt(this.route.snapshot.params['id'], 10);
    this.materialHoney = this.housingService.getMaterialById(materialId);
    this.materialList = this.housingService.getAllMaterial();
  }

  addToCart(materialId: any): void {
    const materialHoney = this.housingService.getMaterialById(materialId);
    if (materialHoney) {
      this.cartService.addToCart({
        id: materialHoney.id,
        type: materialHoney.type,
        name: materialHoney.name,
        price: materialHoney.price,
        quantity: 1,
        weight: materialHoney.weight || 500,
        photo: materialHoney.photo,
        discount: materialHoney.desc
      });
    }
  }

  //TODO
  //Comporbar porque no funcion este metodo



  // addToCart(honeyId: number): void {
  //   this.housingService.addToCartHoney(honeyId);

  // }
}
