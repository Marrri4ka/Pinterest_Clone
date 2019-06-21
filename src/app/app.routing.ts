import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { NewPinComponent } from './new-pin/new-pin.component';





const appRoutes: Routes = [
  {
    path: 'category/:id',
    component: CategoryDetailComponent
  },

  {
    path: 'addpin',
    component: NewPinComponent
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
