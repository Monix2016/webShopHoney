import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IPersonalInfo } from '../../interfaces/i-personal-info';
import { CartService } from '../../services/cart.service';
import { PersonalInfoService } from '../../services/personal-info.service';

@Component({
  selector: 'app-confirm-step',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ],
  templateUrl: './confirm-step.component.html',
  styleUrl: './confirm-step.component.css'
})
export class ConfirmStepComponent implements OnInit {
  @Output() nextStep = new EventEmitter<void>();
  personalInfo!: IPersonalInfo;
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(
    public translate: TranslateService,
    private cartService: CartService,
    private personalInfoService: PersonalInfoService,
  ) { }


  ngOnInit(): void {
    this.personalInfo = this.personalInfoService.getPersonalInfo();
    this.cartService.getCartItems().subscribe(items => this.cartItems = items);
    this.totalPrice = this.cartService.getTotalPrice();
  }

  next(): void {
    this.nextStep.emit();
  }
}
