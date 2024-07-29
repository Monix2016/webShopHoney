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
  
  currentFlag: string;
  selectedLang: string;
  dropdownOpen: boolean = false;
  constructor(public translate: TranslateService) { 
    this.selectedLang = this.translate.currentLang;
    this.currentFlag = this.getFlagUrl(this.selectedLang);
  }

  switchLang = (lang: string) => {
    this.translate.use(lang);
    this.selectedLang = lang;
    this.currentFlag = this.getFlagUrl(lang);
    this.dropdownOpen = false;
  }

  getFlagUrl(language: string): string {
    switch (language) {
      case 'ar':
        return '/assets/img/flags/morocco.png'; 
      case 'es':
        return '/assets/img/flags/spain.png';
      case 'fr':
        return '/assets/img/flags/france.png';
      case 'en':
        return '/assets/img/flags/usa.png';
      default:
        return '';
    }
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
