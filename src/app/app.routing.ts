import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const rootRoutes: Routes = [
  { path: '**', redirectTo: '' }
];

export const rootRoutingProviders: any[] = [];

export const rootRouting: ModuleWithProviders = RouterModule.forRoot(rootRoutes);
