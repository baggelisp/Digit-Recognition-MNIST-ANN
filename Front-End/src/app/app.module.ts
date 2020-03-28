import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_pages/home/home.component';
import { CamvasComponent } from './_pages/home/camvas/camvas.component';
import { LayoutComponent } from './_layout/layout/layout.component';
import { DrawnArrayComponent } from './_pages/home/drawn-array/drawn-array.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CamvasComponent,
    LayoutComponent,
    DrawnArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
