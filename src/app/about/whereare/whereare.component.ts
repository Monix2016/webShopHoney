import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-whereare',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './whereare.component.html',
  styleUrl: './whereare.component.css'
})
export class WhereareComponent {
  constructor(
    public translate: TranslateService
  ) {}

}
