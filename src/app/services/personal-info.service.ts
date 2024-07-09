import { Injectable } from '@angular/core';
import { IPersonalInfo } from '../interfaces/i-personal-info';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  private personalInfo: IPersonalInfo = {
    name: '',
    address: '',
    email: '',
    phone: '',
    paymentMethod: ''
  };

  constructor() { }

  setPersonalInfo(info: IPersonalInfo): void {
    this.personalInfo = info;
  }

  getPersonalInfo(): IPersonalInfo {
    return this.personalInfo;
  }

  getPaymentMethod(): string {
    return this.personalInfo.paymentMethod;
  }
  
}
