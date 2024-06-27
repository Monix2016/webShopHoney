import { Injectable } from '@angular/core';
import { IHoney } from '../interfaces/honey';
import { MOCKHONEYS } from '../../assets/mock/mock-products';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: IHoney[] = MOCKHONEYS;

  getAllHousingLocations(): IHoney[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): IHoney | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
