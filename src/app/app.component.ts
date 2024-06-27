import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuburgerComponent } from './functionalities/menuburger/menuburger.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
    MenuburgerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  title = 'homes';
}
