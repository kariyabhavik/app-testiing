import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsDetailsComponent } from './add-products-details/add-products-details.component';
import { UpdateProductsDetailsComponent } from './update-products-details/update-products-details.component';
import { ListProductsDetailsComponent } from './list-products-details/list-products-details.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AddProductsDetailsComponent,
    UpdateProductsDetailsComponent,
    ListProductsDetailsComponent
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
