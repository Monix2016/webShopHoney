import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menuburger',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './menuburger.component.html',
  styleUrl: './menuburger.component.css'
})
export class MenuburgerComponent {
  menuOpen: boolean = false;


  constructor(
    // public translate: TranslateService
  ){}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}