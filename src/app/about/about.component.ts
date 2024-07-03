import { Component } from '@angular/core';
import { PoliciesComponent } from './policies/policies.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { WhereareComponent } from './whereare/whereare.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FollowUsComponent } from './follow-us/follow-us.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities/activities.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    CommonModule,

    PoliciesComponent,
    DeliveryComponent,
    WhereareComponent,
    ContactUsComponent,
    FollowUsComponent,
    ActivitiesComponent
    
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(
    public translate: TranslateService
  ) { }
}
