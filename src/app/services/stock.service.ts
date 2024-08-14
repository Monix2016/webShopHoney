import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.get<any[]>(this.apiUrl);
  }

  updateProduct(product: any) {
    return this.http.put(`${this.apiUrl}/${product.id}`, product);
  }

  saveProduct(product: any) {
    return this.http.post(this.apiUrl, product);
  }

  getPrice(product: any, selectedWeight: string): number | null {
    // Verifica si el producto tiene un campo de precios y si contiene el peso seleccionado
    if (product && product.prices && product.prices[selectedWeight]) {
      return product.prices[selectedWeight];
    } else {
      return 0; // Si no se encuentra el peso seleccionado, devuelve null
    }
  }

  getDto(product: any, selectedWeight: string): number | null {
    // Verifica si el producto tiene un campo de precios y si contiene el peso seleccionado
    if (product && product.discounts && product.discounts[selectedWeight]) {
      return product.discounts[selectedWeight];
    } else {
      return 0; // Si no se encuentra el peso seleccionado, devuelve null
    }
  }

}
