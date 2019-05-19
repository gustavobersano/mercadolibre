import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingListComponent } from './searching-list.component';

describe('SearchingListComponent', () => {
  let component: SearchingListComponent;
  let fixture: ComponentFixture<SearchingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
