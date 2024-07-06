import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICartitem } from '../interfaces/i-cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<ICartitem[]>([]);
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor() {
    // Inicializa el carrito con valores desde el almacenamiento local, una API, etc.
    const initialItems = this.loadInitialCartItems();
    const initialCount = initialItems.reduce((count, item) => count + item.quantity, 0);
    this.cartItems.next(initialItems);
    this.cartItemCount.next(initialCount);
  }

  getCartItems(): Observable<ICartitem[]> {
    return this.cartItems.asObservable();
  }

  getCartItemCount(): Observable<number> {
    return this.cartItemCount.asObservable();
  }

  addToCart(item: ICartitem): void {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      currentItems.push(item);
    }

    this.cartItems.next(currentItems);
    this.cartItemCount.next(this.cartItemCount.value + item.quantity);
    this.saveCartItems(currentItems);
  }

  private loadInitialCartItems(): ICartitem[] {
    // Lógica para cargar los artículos iniciales en el carrito
    return []; // Ejemplo: cambiar esto por la lógica real
  }

  private saveCartItems(items: ICartitem[]): void {
    // Lógica para guardar el estado del carrito
    // Esto puede ser en el almacenamiento local, una API, etc.
  }
}
