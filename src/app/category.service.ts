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

  addNewCategory(name: string) {
    return this.http.post('/api/addNewCategory', {
      categoryName: name
    });
  }

  updateCategory(id: string, newName: string) {
    return this.http.post('/api/updateCategoryName', {
      id: id,
      newCategoryName: newName
    });
  }

  deleteCategory(id: string) {
    return this.http.post('/api/deleteCategory', {
      id: id
    });
  }

  addNewProduct(object: object) {
    return this.http.post('/api/addNewProduct', {

    });
  }

  updateOrderStatus(id: string, status: string) {
    return this.http.post('/api/updateOrderStatus', {
      id: id,
      status: status
    });
  }

  approveRejectReviews(id: string, type: boolean) {
    return this.http.post('/api/approveRejectReviews', {
      id: id,
      type: type
    });
  }
}