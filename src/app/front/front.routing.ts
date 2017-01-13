import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list.component';
import { FormViewComponent } from './form-view.component';

export const frontRoutes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'form/:id', component: FormViewComponent }
];

export const frontRoutingProviders: any[] = [];

export const frontRouting: ModuleWithProviders = RouterModule.forRoot(frontRoutes);
