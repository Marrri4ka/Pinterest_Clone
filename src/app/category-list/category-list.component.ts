import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers : [CategoryService]
})
export class CategoryListComponent implements OnInit {
  goToDetailPage(clickedCategory: Category) {
    this.router.navigate(['category', clickedCategory.id]);
  };

  categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

}
