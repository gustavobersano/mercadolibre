
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Item } from '../../../shared/models/models';


@Component({
  selector: 'app-searching-item',
  templateUrl: './searching-item.component.html',
  styleUrls: ['./searching-item.component.sass']
})
export class SearchingItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(id: number) {
    this.router.navigate(['items', id]);
  }

}