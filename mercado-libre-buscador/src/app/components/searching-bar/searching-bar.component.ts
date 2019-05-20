import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searching-bar',
  templateUrl: './searching-bar.component.html',
  styleUrls: ['./searching-bar.component.sass']
})
export class SearchingBarComponent implements OnInit {

  private formSearch: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formSearch = new FormGroup({
      data: new FormControl('')
    });
  }

  onSubmit() {
  }

}
