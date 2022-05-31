import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Product} from '../../model/product';


const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/products`);
  }

  create(data): Observable<Product> {
    return this.http.post(`${API_URL}/products`, data);
  }

  update(id, data): Observable<Product>{
    return this.http.put(`${API_URL}/products/${id}`, data);
  }

  findById(id): Observable<Product>{
    return this.http.get<Product>(`${API_URL}/products/${id}`);
  }

  delete(id): Observable<Product>{
    return this.http.delete(`${API_URL}/products/${id}`);
  }
}
