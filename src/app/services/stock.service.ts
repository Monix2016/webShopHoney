import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  products: any[] = []; // Declaramos la propiedad aquí
  private apiUrl = 'http://127.0.0.1:8000/api/v1/products';
  constructor(
    private http: HttpClient
  ) { }



  getProducts() {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateProduct(product: any) {
    return this.http.put(`${this.apiUrl}/${product.id}`, product);
  }

  saveProduct(product: any) {
    return this.http.post(this.apiUrl, product);
  }

}
