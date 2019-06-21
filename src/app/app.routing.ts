import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { NewPinComponent } from './new-pin/new-pin.component';
import { PinListComponent } from './pin-list/pin-list.component';
import { FavoritePinsComponent } from './favorite-pins/favorite-pins.component';
import { EditPinComponent } from './edit-pin/edit-pin.component';

const appRoutes: Routes = [
  // {
  //   path: 'category/:id',
  //   component: CategoryDetailComponent
  // },
  {
    path: '',
    component: PinListComponent
  },

  {
    path: 'addpin',
    component: NewPinComponent
  },

  {
    path: 'favoritepins',
    component: FavoritePinsComponent
  },


  {
    path: 'editpin/:id',
    component: EditPinComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
