import { Component, OnInit, Input } from '@angular/core';
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
export class SearchingListComponent implements OnInit {

  private items: Array<ItemList>;
  private subscription: Subscription;

  constructor(
    private apiItemService: ItemService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    
    const query = this.searchService.getQuery();
    if (query !== '') {
      this.apiItemService.getItems(query).subscribe(response => {
        this.items = response.items;
      });
    }

    this.subscription = this.searchService.changeSearch.subscribe(
      (query) => {
        if (query !== '') {
          this.apiItemService.getItems(query).subscribe(response => {
            this.items = response.items;
          });
        }
      }
    );
    /*
    this.apiItemService.getItemById('MLA784888492').subscribe(response => {
      console.log(response);
    });
    */
  }

}