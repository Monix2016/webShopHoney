import { Injectable } from '@angular/core';
import { IHoney } from '../interfaces/honey';
import { MOCKHONEYS } from '../../assets/mock/mock-products';
import { ICours } from '../interfaces/i-courses';
import { MOCKCOURSES } from '../../assets/mock/mock-courses';
import { IMaterial } from '../interfaces/i-material';
import { MOCKMATERIAL } from '../../assets/mock/mock-material';
import { ITeam } from '../interfaces/i-team';
import { MOCKTEAM } from '../../assets/mock/mock-team';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: IHoney[] = MOCKHONEYS;
  protected coursList: ICours[]=MOCKCOURSES;
  protected materialList: IMaterial[]=MOCKMATERIAL;
  protected team:ITeam[]=MOCKTEAM;
  filteredLocationList: IHoney[] = [];
  private cartService!: CartService;


  getAllHousingLocations(): IHoney[] {
    return this.housingLocationList;
  }
  getAllCourses(): ICours[]{
    return this.coursList;
  }

  getAllMaterial():IMaterial[]{
    return this.materialList;
  }

  getTeam():ITeam[]{
    return this.team;
  }

  getHousingLocationById(id?: number): IHoney | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  getCoursById(id:number):ICours |undefined{
    return this.coursList.find(coursHoney=> coursHoney.id===id);
  }

  getMaterialById(id:number):IMaterial| undefined{
    return this.materialList.find(materialHoney => materialHoney.id===id)
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  filterResults(text: string): IHoney[] {
    if (!text) {
      return this.housingLocationList;
    }

    return this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  // addToCartHoney(id: number): any {
  //   const honey = this.getHousingLocationById(id);
  //   if (honey) {
  //     this.cartService.addToCart({
  //       id: honey.id,
  //       type:honey.type,
  //       name: honey.name,
  //       price: honey.price,
  //       quantity: 1,
  //       weight: honey.weight || 500,
  //       photo:honey.photo,
  //     });
  //   }
  // }
}
