import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
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
    TranslateModule.forChild(),
    AppRoutingProductModule,
    SharedModule
  ]
})
export class ProductModule { }
