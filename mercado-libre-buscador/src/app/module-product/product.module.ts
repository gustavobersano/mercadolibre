import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ProductComponent } from './components/product/product.component';
// Modules
import { AppRoutingProductModule } from './product-routing.module';
import { SharedModule } from '../module-shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    AppRoutingProductModule,
    SharedModule
  ]
})
export class ProductModule { }
