import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    URL = "http://localhost:3000/products"
    constructor(private http: HttpClient) { }

    // Create
    addItem(item: Product): Observable<Product> {
        return this.http.post<Product>(this.URL, item);
    }

    // Read
    getItems(): Observable<Product[]> {
        return this.http.get<Product[]>(this.URL);
    }

    // Update
    updateItem(item: Product): Observable<Product> {
        return this.http.put<Product>(this.URL +"/"+ item.id, item);
    }

    // Delete
    deleteItem(id:any): Observable<Product> {
        return this.http.delete<Product>(this.URL +"/"+ id);
    }
}