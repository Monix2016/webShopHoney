import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IHoney } from '../interfaces/honey';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  products: any[] = []; // Declaramos la propiedad aquí
  // selectedWeight: number = 1000; // Valor por defecto
  private apiUrl = 'http://127.0.0.1:8000/api/v1/products';
  constructor(
    private http: HttpClient
  ) { }


  getProducts(): Observable<IHoney[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(products => products.map(product => {
        product.prices = JSON.parse(product.prices || '{}');
        product.discounts = JSON.parse(product.discounts || '{}');
        console.log('estoy en el StockService los productos son:', product)
        return product;
      }))
    );
  }

  updateProduct(product: IHoney, id: number) {
    console.log('el index para el update', product)
    console.log('el index para el update', id)
    return this.http.put<IHoney>(`${this.apiUrl}/${id}`, product);

  }

  deleteProduct(index1: any) {
    return this.http.delete(`${this.apiUrl}/${index1}`, index1);
  }

  saveProduct(product: IHoney): Observable<IHoney> {
    return this.http.post<IHoney>(this.apiUrl, product);
  }

  getPrice(product: any, selectedWeight: string): number | null {

    console.log('Product Prices desde StockService:', product.prices);
    console.log('Requested Weight desde StockService:', selectedWeight);
    if (product && product.prices && product.prices[selectedWeight]) {
      return product.prices[selectedWeight];
    }
    return null; // Devuelve null si no se encuentra el peso seleccionado
  }

  getDto(product: any, selectedWeight: string): number | null {
      console.log('Product Prices desde StockService:', product.discounts);
    console.log('Requested Weight desde StockService:', selectedWeight);
    if (product && product.discounts && product.discounts[selectedWeight]) {
      return product.discounts[selectedWeight];
    }
    return null; // Devuelve null si no se encuentra el peso seleccionado
  }

  // getPrice(product: IHoney, weight: number): number | null {
  //   console.log('Product Prices desde StockService:', product.prices);
  //   console.log('Requested Weight desde StockService:', weight);
  //   return product.prices[weight] || null;
  // }

  // getDto(product: IHoney, weight: number): number | null {

  //   return product.discounts[weight] || null;
  // }



  // uploadImage(file: File): Observable<string> {
  //   const formData = new FormData();
  //   formData.append('image', file);

  //   return this.http.post<{ path: string }>(this.apiUrl, formData).pipe(
  //     map(response => response.path),
  //     catchError((error) => {
  //       console.error('Error uploading image', error);
  //       return throwError(error);
  //     })
  //   );
  // }

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);

    // Asegúrate de que la API devuelva solo el nombre del archivo
    return this.http.post(this.apiUrl, formData).pipe(
      map((response: any) => response.imageName)  // Asegúrate de que la API esté devolviendo 'imageName'
    );
  }

}
