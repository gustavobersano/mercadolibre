import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../../models/models';

@Component({
  selector: 'app-searching-item',
  templateUrl: './searching-item.component.html',
  styleUrls: ['./searching-item.component.sass']
})
export class SearchingItemComponent implements OnInit {

  @Input() item: Item;
  test: string;

  constructor() { 
    this.test = 'https://http2.mlstatic.com/funda-para-celular-D_NQ_NP_715251-MLM28149640451_092018-F.jpg';
  }

  ngOnInit() {
  }

}
