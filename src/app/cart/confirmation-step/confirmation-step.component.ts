import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

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
export class ConfirmationStepComponent {
  constructor(
    public translate: TranslateService,
    private cartService: CartService,
    private router: Router
  ){}

  finishPurchase(): void {
    // Borra la lista del carrito
    this.cartService.clearCart();

    // Resetea el contador del carrito a 0
    this.cartService.resetCartCount();
        // Redirige al home (o a la ruta deseada)
        this.router.navigate(['/']); // '/home' si es tu ruta de inicio
  }
}
