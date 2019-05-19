import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { SearchingListComponent } from './components/searching-list/searching-list.component';
import { SearchingItemComponent } from './components/searching-item/searching-item.component';
// Routing Module
import { AppRoutingSearchModule } from './search-routing.module';

@NgModule({
  declarations: [SearchingListComponent, SearchingItemComponent],
  imports: [
    CommonModule,
    AppRoutingSearchModule
  ]
})
export class SearchModule { }
