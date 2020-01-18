import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  categoryList: any = [];
  productList: any = [];
  constructor(private CategoryService: CategoryService, private router: Router) {
    this.CategoryService.getAllCategory().subscribe(categoryListData => {
      this.categoryList = categoryListData;
      console.log(this.categoryList);
      this.CategoryService.getAllProduct().subscribe(productListData => {
        this.productList = productListData;
        console.log(this.productList);
      });
    });
  }

  CategoryProducts(categoryName: string){
    this.router.navigate(['/productListing', categoryName])
  }




  ngOnInit() {

  }

}
