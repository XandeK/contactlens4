import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-order-records',
  templateUrl: './order-records.component.html',
  styleUrls: ['./order-records.component.css']
})
export class OrderRecordsComponent implements OnInit {

  orderList: any = [];
  constructor(private CategoryService: CategoryService) {
    this.CategoryService.getAllOrders().subscribe(orderList => {
      this.orderList = orderList;
      console.log(this.orderList);
    });
  }

  ngOnInit() {
  }

}
