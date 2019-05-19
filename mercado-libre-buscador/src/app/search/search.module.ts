import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingListComponent } from './components/searching-list/searching-list.component';
import { SearchingItemComponent } from './components/searching-item/searching-item.component';

@NgModule({
  declarations: [SearchingListComponent, SearchingItemComponent],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
