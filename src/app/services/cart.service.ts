import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemCount = new BehaviorSubject<number>(0);
  constructor() { 
        // Inicializa el carrito con valores desde el almacenamiento local, una API, etc.
        const initialCount = this.loadInitialCartCount();
        this.cartItemCount.next(initialCount);
  }

  getCartItemCount(): Observable<number> {
    return this.cartItemCount.asObservable();
  }

  addToCart(item: any): void {
    // Lógica para agregar un artículo al carrito
    const currentCount = this.cartItemCount.value + 1;
    this.cartItemCount.next(currentCount);
    // Guarda el estado del carrito en el almacenamiento local, una API, etc.
    this.saveCartCount(currentCount);
  }

  private loadInitialCartCount(): number {
    // Lógica para cargar el número inicial de artículos en el carrito
    // Esto puede ser desde el almacenamiento local, una API, etc.
    return 0; // Ejemplo: cambiar esto por la lógica real
  }
  private saveCartCount(count: number): void {
    // Lógica para guardar el estado del carrito
    // Esto puede ser en el almacenamiento local, una API, etc.
  }
}
