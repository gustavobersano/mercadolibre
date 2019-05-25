import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { AppRoutingSearchModule } from './search-routing.module';
import { SharedModule } from '../shared/shared.module';
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
    AppRoutingSearchModule,
    SharedModule
  ]
})
export class SearchModule { }
