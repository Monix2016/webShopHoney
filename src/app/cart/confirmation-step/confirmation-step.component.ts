import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { PersonalInfoService } from '../../services/personal-info.service';
import { IPersonalInfo } from '../../interfaces/i-personal-info';

@Component({
  selector: 'app-confirmation-step',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ],
  templateUrl: './confirmation-step.component.html',
  styleUrl: './confirmation-step.component.css'
})
export class ConfirmationStepComponent implements OnInit {

  personalInfo!: IPersonalInfo;
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(
    public translate: TranslateService,
    private cartService: CartService,
    private personalInfoService: PersonalInfoService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.personalInfo = this.personalInfoService.getPersonalInfo();
    this.cartService.getCartItems().subscribe(items => this.cartItems = items);
    this.totalPrice = this.cartService.getTotalPrice();
  }

  finishPurchase(): void {
    // Borra la lista del carrito
    this.cartService.clearCart();

    // Resetea el contador del carrito a 0
    this.cartService.resetCartCount();
        // Redirige al home (o a la ruta deseada)
        this.router.navigate(['/']); // '/home' si es tu ruta de inicio
  }
}
