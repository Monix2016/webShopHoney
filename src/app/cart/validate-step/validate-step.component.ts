import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ICartitem } from '../../interfaces/i-cartitem';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validate-step',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ],
  templateUrl: './validate-step.component.html',
  styleUrl: './validate-step.component.css'
})
export class ValidateStepComponent implements OnInit  {
  @Output() nextStep = new EventEmitter<void>();
  cartItems: ICartitem[] = [];

  constructor(
    public translate: TranslateService,
    private cartService: CartService
  ){}


  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => this.cartItems = items);
  }
  next(): void {
    this.nextStep.emit();
  }
}
