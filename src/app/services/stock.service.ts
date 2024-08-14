import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  products: any[] = []; // Declaramos la propiedad aquí
  selectedWeight: number = 1000; // Valor por defecto
  private apiUrl = 'http://127.0.0.1:8000/api/v1/products';
  constructor(
    private http: HttpClient
  ) { }


  getProducts() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(products => products.map(product => {
        product.prices = JSON.parse(product.prices || '{}');
        product.discounts = JSON.parse(product.discounts || '{}');
        return product;
      }))
    );
  }

  updateProduct(product: any) {
    return this.http.put(`${this.apiUrl}/${product.id}`, product);
  }

  saveProduct(product: any) {
    return this.http.post(this.apiUrl, product);
  }

  getPrice(product: any, selectedWeight: string): number | null {
    if (product && product.prices && product.prices[selectedWeight]) {
      return product.prices[selectedWeight];
    }
    return null; // Devuelve null si no se encuentra el peso seleccionado
  }
  
  getDto(product: any, selectedWeight: string): number | null {
    if (product && product.discounts && product.discounts[selectedWeight]) {
      return product.discounts[selectedWeight];
    }
    return null; // Devuelve null si no se encuentra el peso seleccionado
  }

}
