import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { frontRouting } from './front.routing';
import { FrontService } from './front.service';

import { CategoryListComponent } from './category-list.component';
import { FormViewComponent } from './form-view.component';
import { DynamicFieldComponent } from './dynamic-field.component';

@NgModule({
  imports: [
    frontRouting,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    CategoryListComponent
  ],
  declarations: [
    CategoryListComponent,
    FormViewComponent,
    DynamicFieldComponent
  ],
  providers: [
    FrontService
  ]
})
export class FrontModule {

}
