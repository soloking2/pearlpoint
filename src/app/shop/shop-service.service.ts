import { Injectable } from '@angular/core';
import { IShop } from './shop';
import { Observable, throwError } from 'rxjs';
import {catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private itemUrl = 'api/items/items.json';

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(this.itemUrl).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  addProductToCart(prod: any) {
    localStorage.setItem('product', JSON.stringify(prod));
  }

  getProductFromCart() {
    return JSON.parse(localStorage.getItem('product'));
  }

  removeAllProductFromCart() {
    return localStorage.removeItem('product');
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
