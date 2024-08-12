import { Component, HostListener } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuburgerComponent } from './functionalities/menuburger/menuburger.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SwitchLangComponent } from './functionalities/switch-lang/switch-lang.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FollowUsComponent } from './about/follow-us/follow-us.component';
import { ContactUsComponent } from './about/contact-us/contact-us.component';
import { CartService } from './services/cart.service';
import { AuthAdminComponent } from './account/auth-admin/auth-admin.component';
import { AuthenticatorService } from './services/authenticator.service';
import { ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
    HttpClientModule,
    MatDialogModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    MenuburgerComponent,
    TranslateModule,
    CommonModule,
    SwitchLangComponent,
    FollowUsComponent,
    ContactUsComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  cartCount: number = 0;
  showStockComponent = false;


  constructor(
    public translate: TranslateService,
    private cartService: CartService,
    private dialog: MatDialog, 
    private authService: AuthenticatorService
  ) {
    this.cartService.getCartItemCount().subscribe(count => {
      this.cartCount = count;
    });

    translate.addLangs(['en', 'es', 'fr', 'ar']);
    const lang = translate.getBrowserLang() as string;

    if ((lang === '')) {
      translate.setDefaultLang('ar');
    }
    else if ((lang !== 'es') && (lang !== 'en') && (lang !== 'fr') && (lang !== 'ar')) {
      translate.setDefaultLang('ar');
    }
    this.translate.use(lang);

  }

  // @HostListener('window:keydown.control.alt.c', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   this.showStockComponent = !this.showStockComponent;
  // }


  @HostListener('window:keydown.control.alt.c', ['$event'])
  openLoginDialog(event: KeyboardEvent): void {
    const dialogRef = this.dialog.open(AuthAdminComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.showStockComponent = true;
      }
    });
  }



  title = 'homes';
}
