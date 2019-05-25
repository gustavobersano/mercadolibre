import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
// Services
import { SearchService } from '../../module-shared/services/search.service';

@Component({
  selector: 'app-searching-bar',
  templateUrl: './searching-bar.component.html',
  styleUrls: ['./searching-bar.component.sass']
})
export class SearchingBarComponent implements OnInit {

  private formSearch: FormGroup;

  constructor(private router: Router,
    private searchService: SearchService) { }

  ngOnInit() {
    this.formSearch = new FormGroup({
      query: new FormControl('')
    });
  }

  onSubmit() {
    let query = this.formSearch.controls['query'].value || '';
    if (query !== '') {
      this.searchService.setQuery(query);
      this.router.navigate(['items']);
    }
  }

}
