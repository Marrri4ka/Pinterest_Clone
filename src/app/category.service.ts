import { Injectable } from '@angular/core';
import { Category } from './models/category.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CategoryService {

  categories: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.categories = database.list('topics')
  }

  getCategories() {
    return this.categories;
  }


  getCategoryById(categoryId: number) {
    return this.database.object('topics/' + categoryId);
  }



  getPinsByCategoryName(categoryName: string) {
    return this.database.list('pins', {
      query: {
        orderByChild: 'category',
        equalTo: categoryName
      }
    });

  }


}
