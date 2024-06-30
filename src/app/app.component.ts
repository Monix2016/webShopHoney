import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuburgerComponent } from './functionalities/menuburger/menuburger.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SwitchLangComponent } from './functionalities/switch-lang/switch-lang.component';
import { CommonModule } from '@angular/common';
import { PoliciesComponent } from './about/policies/policies.component';
import { DeliveryComponent } from './about/delivery/delivery.component';
import { FollowUsComponent } from './about/follow-us/follow-us.component';

export function HttpLoaderFactory(http: HttpClient) {
  return  new  TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
    MenuburgerComponent,
    TranslateModule,
    CommonModule,
    SwitchLangComponent,
    PoliciesComponent,
    DeliveryComponent,
    FollowUsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'es','fr','ar']);
    const lang=translate.getBrowserLang() as string;
    console.log(lang);


  if((lang ==='')){
      translate.setDefaultLang('ar');
    }
  else if( (lang !=='es') && (lang !=='en') && (lang !== 'fr') && (lang !=='ar')){
      translate.setDefaultLang('ar');
    }
    this.translate.use(lang);
   
    
  }

  title = 'homes';
}
