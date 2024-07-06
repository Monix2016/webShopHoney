import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHoney } from '../interfaces/honey';
import { RouterModule } from '@angular/router';
import { AddCartComponent } from '../functionalities/add-cart/add-cart.component';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AddCartComponent
  ],


  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})

export class HousingLocationComponent {

  @Input() housingLocation!: IHoney;

}
