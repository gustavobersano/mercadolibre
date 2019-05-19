import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ProductComponent } from './components/product/product.component';
// Routing Module
import { AppRoutingProductModule } from './product-routing.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    AppRoutingProductModule
  ]
})
export class ProductModule { }
