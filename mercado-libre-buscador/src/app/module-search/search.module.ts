import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
// Modules
import { AppRoutingSearchModule } from './search-routing.module';
import { SharedModule } from '../module-shared/shared.module';
// Components
import { SearchingListComponent } from './components/searching-list/searching-list.component';
import { SearchingItemComponent } from './components/searching-item/searching-item.component';

@NgModule({
  declarations: [
    SearchingListComponent,
    SearchingItemComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    AppRoutingSearchModule,
    SharedModule
  ]
})
export class SearchModule { }
