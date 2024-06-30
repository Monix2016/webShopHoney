import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-follow-us',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './follow-us.component.html',
  styleUrl: './follow-us.component.css'
})
export class FollowUsComponent {
  constructor(
    public translate: TranslateService
  ) {}

}
