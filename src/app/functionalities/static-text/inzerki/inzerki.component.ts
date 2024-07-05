import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-inzerki',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './inzerki.component.html',
  styleUrl: './inzerki.component.css'
})
export class InzerkiComponent {
  constructor(
    public translate: TranslateService
  ) {}

}
