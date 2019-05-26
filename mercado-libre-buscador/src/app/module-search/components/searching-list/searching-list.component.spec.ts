import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EventEmitter } from '@angular/core';
import { SearchingListComponent } from './searching-list.component';
// Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
// Components
import { BreadcrumbComponent } from '../../../module-shared/components/breadcrumb/breadcrumb.component';
import { SearchingItemComponent } from '../searching-item/searching-item.component';
// Pipes
import { FormatCurrencyPipe } from '../../../module-shared/pipes/formatCurrency.pipe';
// Services
import { SearchService } from '../../../module-shared/services/search.service';
import { SearchServiceStub } from '../../../module-shared/services/test/stubs/search.stub';
import { ItemService } from '../../../module-shared/services/item.service';
import { ItemServiceStub } from '../../../module-shared/services/test/stubs/item.stub';


describe('SearchingListComponent', () => {
  let component: SearchingListComponent;
  let fixture: ComponentFixture<SearchingListComponent>;
  let apiItemServices: ItemService;
  let searchServiceStub: SearchServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SearchingListComponent,
        // Components
        BreadcrumbComponent,
        SearchingItemComponent,
        // Pipes
        FormatCurrencyPipe
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatProgressSpinnerModule,
        MatDividerModule
      ],
      providers: [
        { provide: ItemService, useClass: ItemServiceStub },
        { provide: SearchService, useClass: SearchServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingListComponent);
    component = fixture.componentInstance;
    apiItemServices = TestBed.get(ItemService);
    searchServiceStub = TestBed.get(SearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call apiItemService.getItems', () => {
    let itemServiceSpy = spyOn(apiItemServices, 'getItems');
    fixture.whenStable().then(() => {
      component.ngOnInit();
      expect(itemServiceSpy).toHaveBeenCalled();
    });
  });

  it('should heard changeSearch subscription', () => {
    fixture.whenStable().then(() => {
      let itemServiceSpy = spyOn(apiItemServices, 'getItems');
      searchServiceStub.changeSearch.next('Dell');
      expect(itemServiceSpy).toHaveBeenCalled();
    });
  });
});
