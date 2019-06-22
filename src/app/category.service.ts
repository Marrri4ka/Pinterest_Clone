import { Injectable } from '@angular/core';
import { Category } from './models/category.model';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class CategoryService {

  CATEGORIES: Category[] = [
    new Category("book", 1),
    new Category('film', 2),
    new Category("sport", 3)
  ];
  constructor(private database: AngularFireDatabase) { }

  getCategories() {
    return this.CATEGORIES;
  }


  getCategoryById(categoryId: number) {
    for (var i = 0; i < this.CATEGORIES.length; i++) {
      if (this.CATEGORIES[i].id === categoryId) {
        return this.CATEGORIES[i];
      }
    }
  }

  getPinsByCategoryName(categoryName: string) {
    return this.database.list('pins', {
      query: {
        orderByChild: 'category',
        equalTo: categoryName
      }
    });

  }



  // getPinsByCategoryId(categoryId: number) {
  //   var res = [];
  //   var category = this.getCategoryById(categoryId);
  //   for (var i = 0; i < PINS.length; i++) {
  //     if (PINS[i].category === category.title) {
  //       res.push(PINS[i])
  //     }
  //   }
  //   return res;
  // }

}
