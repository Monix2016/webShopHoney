import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {
  constructor(
    public translate: TranslateService
  ) {}

}
