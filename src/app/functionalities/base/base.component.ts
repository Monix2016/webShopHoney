import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IHoney } from '../../interfaces/honey';
import { ICours } from '../../interfaces/i-courses';
import { IMaterial } from '../../interfaces/i-material';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

  housingLocationList: IHoney[] = [];
  coursesHoneyList: ICours[] = [];
  materialHoneyList: IMaterial[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: IHoney[] = [];

  constructor(
    public translate: TranslateService,
  ) {
    this.coursesHoneyList = this.housingService.getAllCourses();
    this.materialHoneyList = this.housingService.getAllMaterial();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  filterResults(text: string): void {
    this.filteredLocationList = this.housingService.filterResults(text);
  }

  getProducts(): void {
    this.housingService.getHousingLocations().subscribe(
      (products) => {
        this.housingLocationList = products;
        this.filteredLocationList = this.housingLocationList;
        console.log("Estoy en la BASE GEnerica housingLocationList", this.housingLocationList);

      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }


}
