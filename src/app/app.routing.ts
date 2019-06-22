import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { NewPinComponent } from './new-pin/new-pin.component';
import { PinListComponent } from './pin-list/pin-list.component';
import { FavoritePinsComponent } from './favorite-pins/favorite-pins.component';
import { EditPinComponent } from './edit-pin/edit-pin.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { PindetailComponent } from './pindetail/pindetail.component';
import { CategoryListComponent } from './category-list/category-list.component';

const appRoutes: Routes = [
  {
    path: 'category/:id',
    component: CategoryDetailComponent
  },
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
  },

  {
    path: 'public',
    component: PublicComponent
  },

  {
    path: 'private',
    component: PrivateComponent
  },

  {
    path: 'pindetail/:id',
    component: PindetailComponent
  },
  {
    path: 'categories',
    component: CategoryListComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
