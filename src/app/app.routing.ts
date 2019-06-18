import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailComponent }   from './category-detail/category-detail.component';





const appRoutes: Routes = [
{
  path: 'category/:id',
  component: CategoryDetailComponent
}];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
