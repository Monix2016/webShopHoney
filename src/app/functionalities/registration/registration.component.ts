import { Component } from '@angular/core';
import { ContactUsComponent } from '../../about/contact-us/contact-us.component';
import { FollowUsComponent } from '../../about/follow-us/follow-us.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ContactUsComponent,
    FollowUsComponent
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

}
