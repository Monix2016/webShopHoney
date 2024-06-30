import { Component } from '@angular/core';
import { PoliciesComponent } from './policies/policies.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { WhereareComponent } from './whereare/whereare.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    PoliciesComponent,
    DeliveryComponent,
    WhereareComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
