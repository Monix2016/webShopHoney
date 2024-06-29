import { Injectable } from '@angular/core';
import { IHoney } from '../interfaces/honey';
import { MOCKHONEYS } from '../../assets/mock/mock-products';
import { ICours } from '../interfaces/i-courses';
import { MOCKCOURSES } from '../../assets/mock/mock-courses';
import { IMaterial } from '../interfaces/i-material';
import { MOCKMATERIAL } from '../../assets/mock/mock-material';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: IHoney[] = MOCKHONEYS;
  protected coursList: ICours[]=MOCKCOURSES;
  protected materialList: IMaterial[]=MOCKMATERIAL;


  getAllHousingLocations(): IHoney[] {
    return this.housingLocationList;
  }
  getAllCourses(): ICours[]{
    return this.coursList;
  }

  getAllMaterial():IMaterial[]{
    return this.materialList;
  }

  getHousingLocationById(id: number): IHoney | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
