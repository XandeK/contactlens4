import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getAllCategory() {
    return this.http.get<any[]>('/api/getAllCategory');
  }
  getAllProduct() {
    return this.http.get<any[]>('/api/getAllProduct');
  }
  getAllOrders() {
    return this.http.get<any[]>('/api/getAllOrders');
  }
  getCategoryProduct(categoryName: string) {
    return this.http.get('./api/getCategoryProduct/' + categoryName);
  }
  getAllReviews() {
    return this.http.get<any[]>('/api/getAllReviews');
  }
}