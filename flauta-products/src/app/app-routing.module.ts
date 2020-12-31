import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddProductsDetailsComponent} from './add-products-details/add-products-details.component';
import {ListProductsDetailsComponent} from './list-products-details/list-products-details.component';
import {UpdateProductsDetailsComponent} from './update-products-details/update-products-details.component';

const routes: Routes = [
  {
    component:AddProductsDetailsComponent,
    path:'add'
  },
  {
    component:ListProductsDetailsComponent,
    path:'list'
  },
  {
    component:UpdateProductsDetailsComponent,
    path:'update'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
