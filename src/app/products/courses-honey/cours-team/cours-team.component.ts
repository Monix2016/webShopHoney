import { Component, Input, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ITeam } from '../../../interfaces/i-team';
import { HousingService } from '../../../services/housing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cours-team',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule

  ],
  templateUrl: './cours-team.component.html',
  styleUrl: './cours-team.component.css'
})
export class CoursTeamComponent {
@Input() staff!: ITeam;


}
