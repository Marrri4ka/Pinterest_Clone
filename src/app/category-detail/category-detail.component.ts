import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../models/category.model';
import { Pin } from '../models/pin.model';
import { CategoryService } from '../category.service';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  providers: [CategoryService]
})
export class CategoryDetailComponent implements OnInit {

  categoryId: number;
  categoryToDisplay;
  pinsToDisplay: FirebaseListObservable<any[]>;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryId = parseInt(urlParameters['id']);
    });
    this.categoryService.getCategoryById(this.categoryId).subscribe(category => {
      this.categoryToDisplay = category;
      this.pinsToDisplay = this.categoryService.getPinsByCategoryName(this.categoryToDisplay.title);
    });
  }

}
