import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  API = 'http://localhost:3000/products';
  constructor(public http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API}`);
  }
  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API}/${id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API}`, product);
  }
  editProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API}/${product.id}`, product);
  }
}
