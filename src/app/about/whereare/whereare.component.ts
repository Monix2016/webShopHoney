import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FollowUsComponent } from '../follow-us/follow-us.component';
import { ActivitiesComponent } from '../activities/activities.component';

@Component({
  selector: 'app-whereare',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ContactUsComponent,
    FollowUsComponent,
    ActivitiesComponent
  ],
  templateUrl: './whereare.component.html',
  styleUrl: './whereare.component.css'
})
export class WhereareComponent {
  constructor(
    public translate: TranslateService
  ) {}

}
