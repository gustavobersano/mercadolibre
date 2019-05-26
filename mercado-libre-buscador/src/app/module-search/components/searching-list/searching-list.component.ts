import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// Services
import { ItemService } from '../../../module-shared/services/item.service';
import { SearchService } from '../../../module-shared/services/search.service';
// Models
import { ItemList } from '../../../module-shared/models/models';

@Component({
  selector: 'app-searching-list',
  templateUrl: './searching-list.component.html',
  styleUrls: ['./searching-list.component.sass']
})
export class SearchingListComponent implements OnInit, OnDestroy {

  private items: Array<ItemList>;
  private subscription: Subscription;
  private loading: boolean;

  constructor(
    private apiItemService: ItemService,
    private searchService: SearchService
  ) { 
    this.loading = false;
  }

  ngOnInit() {
    
    const query = this.searchService.getQuery();
    if (query !== '') {
      this.loading = true;
      this.apiItemService.getItems(query).subscribe(response => {
        this.items = response.items;
        this.loading = false;
      });
    }

    this.subscription = this.searchService.changeSearch.subscribe(
      (query) => {
        if (query !== '') {
          this.loading = true;
          this.apiItemService.getItems(query).subscribe(response => {
            this.items = response.items;
            this.loading = false;
          });
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}