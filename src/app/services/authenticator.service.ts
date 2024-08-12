import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  constructor() { }

  submitLogin(userName: string,  password: string) {
    console.log(`Homes application received: 
    userName:${userName}, 
     password: ${password}.`);
  }
}
