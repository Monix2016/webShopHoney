import { Component, Input } from '@angular/core';
import { IMaterial } from '../../interfaces/i-material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { BaseMaterialComponent } from '../../functionalities/base-material/base-material.component';

@Component({
  selector: 'app-material-honey',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,

  ],
  templateUrl: './material-honey.component.html',
  styleUrl: './material-honey.component.css'
})
export class MaterialHoneyComponent extends BaseMaterialComponent {
  
}
