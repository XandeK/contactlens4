import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  reviewList: any = [];
  constructor(private CategoryService: CategoryService) {
    this.CategoryService.getAllReviews().subscribe(data => {
      this.reviewList = data;
      console.log(this.reviewList);
    });
  }
  ngOnInit() {
  }

}
