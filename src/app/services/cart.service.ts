import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICartitem } from '../interfaces/i-cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<ICartitem[]>([]);
  private cartItemCount = new BehaviorSubject<number>(0);

  getCartItems() {
    return this.cartItems.asObservable();
  }

  getCartItemCount() {
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

    this.updateCart(currentItems);
  }

  removeFromCart(itemId: number): void {
    let currentItems = this.cartItems.value;
    currentItems = currentItems.filter(cartItem => cartItem.id !== itemId);
    this.updateCart(currentItems);
  }

  updateCartItem(itemId: number, quantity: number, weight: number): void {
    let currentItems = this.cartItems.value;
    const itemToUpdate = currentItems.find(cartItem => cartItem.id === itemId);

    if (itemToUpdate) {
      itemToUpdate.quantity = quantity;
      itemToUpdate.weight = weight;
      this.updateCart(currentItems);
    }
  }

  isCartEmpty(): boolean {
    return this.cartItemCount.value === 0;
  }

  private updateCart(items: ICartitem[]): void {
    this.cartItems.next(items);
    const totalCount = items.reduce((total, item) => total + item.quantity, 0);
    this.cartItemCount.next(totalCount);
    this.saveCartItems(items);
  }

  private saveCartItems(items: ICartitem[]) {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }

  getTotalPrice(): number {
    const items = this.cartItems.value;
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }


  clearCart(): void {
    this.cartItems.next([]);
  }

  resetCartCount(): void {
    this.cartItemCount.next(0);
  }
}