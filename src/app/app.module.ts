import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { rootRouting } from './app.routing';
import { FrontModule } from './front/front.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    rootRouting,
    BrowserModule,
    FrontModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
