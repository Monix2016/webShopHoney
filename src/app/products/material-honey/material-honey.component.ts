import { Component, Input } from '@angular/core';
import { IMaterial } from '../../interfaces/i-material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ScrollAnimationService } from '../../services/scroll-animation.service';
import { AddCartComponent } from '../../functionalities/add-cart/add-cart.component';

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
    public translate: TranslateService,
    private scrollAnimationService: ScrollAnimationService
  ) {
    
    this.scrollAnimationService.initializeScrollAnimation();
    
  }
}
