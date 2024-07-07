import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  private personalInfo: any = {};

  constructor() { }

  setPersonalInfo(info: any): void {
    this.personalInfo = info;
  }

  getPersonalInfo(): any {
    return this.personalInfo;
  }
}
