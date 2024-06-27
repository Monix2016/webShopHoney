import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-switch-lang',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './switch-lang.component.html',
  styleUrl: './switch-lang.component.css'
})
export class SwitchLangComponent {
  
  constructor(public translate: TranslateService) { }

  switchLang = (lang: string) => {
    this.translate.use(lang);
  }

}
