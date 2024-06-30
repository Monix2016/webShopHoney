import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-policies',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css'
})
export class PoliciesComponent {
  constructor(
    public translate: TranslateService
  ) {}


}
