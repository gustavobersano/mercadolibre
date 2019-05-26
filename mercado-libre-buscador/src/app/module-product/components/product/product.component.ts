import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Services
import { ItemService } from '../../../module-shared/services/item.service';
// Models
import { Item } from '../../../module-shared/models/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  private id: String;
  private item: Item;
  private loading: boolean;

  constructor(private route: ActivatedRoute,
    private apiItemService: ItemService) { 
      this.loading = true;
    }

  ngOnInit() {
    this.id = this.route.parent.params['value'].id;
    if (this.id != '') {
      this.loading = true;
      this.apiItemService.getItemById(this.id).subscribe(response => {
        this.item = response.item;
        this.loading = false;
      });
    }

    this.route.parent.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.loading = true;
        this.apiItemService.getItemById(this.id).subscribe(response => {
          this.item = response.item;
          this.loading = false;
        });
      }
    });

  }

}
