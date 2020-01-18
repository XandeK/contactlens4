import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }
  result: any = [];
  catName: any = [];
  ngOnInit() {
    const categoryName = this.route.snapshot.params.categoryName;
    this.catName =  this.route.snapshot.params.categoryName;
    this.categoryService.getCategoryProduct(categoryName).subscribe(data => {
      this.result = data;
    });
  }

}