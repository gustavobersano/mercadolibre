import { Component, OnInit, Input } from '@angular/core';
// Services
import { ItemService } from '../../../services/item.service';
// Models
import { Item } from '../../../models/models';

@Component({
  selector: 'app-searching-list',
  templateUrl: './searching-list.component.html',
  styleUrls: ['./searching-list.component.sass']
})
export class SearchingListComponent implements OnInit {

  @Input() query: String;

  private items: Array<Item>;

  constructor(
    private apiItemService: ItemService
  ) { }

  ngOnInit() {
    
    this.query = "celular";
    this.apiItemService.getItems(this.query).subscribe(response => {
      console.log(response);
    });
    
    this.apiItemService.getItemById('MLA784888492').subscribe(response => {
      console.log(response);
    });
  }

}