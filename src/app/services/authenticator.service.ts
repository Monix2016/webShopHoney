import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1/login';

  constructor(private http: HttpClient) {}

  // submitLogin(userName: string,  password: string) {
  //   console.log(`Homes application received: 
  //   userName:${userName}, 
  //    password: ${password}.`);
  // }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }

}
