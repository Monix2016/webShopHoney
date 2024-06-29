import { Component, Input } from '@angular/core';
import { IMaterial } from '../../interfaces/i-material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-material-honey',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './material-honey.component.html',
  styleUrl: './material-honey.component.css'
})
export class MaterialHoneyComponent {
  @Input() materialHoney!: IMaterial;

}
