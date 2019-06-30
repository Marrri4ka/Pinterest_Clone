import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [CategoryService]
})
export class CategoryListComponent implements OnInit {
  goToDetailPage(clickedCategory) {
    this.router.navigate(['category', clickedCategory.$key]);
  };

  categories: FirebaseListObservable<any[]>;



  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

}
