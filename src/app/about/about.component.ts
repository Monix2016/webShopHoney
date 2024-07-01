import { Component } from '@angular/core';
import { PoliciesComponent } from './policies/policies.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { WhereareComponent } from './whereare/whereare.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FollowUsComponent } from './follow-us/follow-us.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,

    PoliciesComponent,
    DeliveryComponent,
    WhereareComponent,
    ContactUsComponent,
    FollowUsComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
