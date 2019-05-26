import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit {

  @Input() categories: Array<String>;

  constructor() { }

  ngOnInit() {
    console.log(this.categories);
  }

}
