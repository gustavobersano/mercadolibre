import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductComponent } from './product.component';
// Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// Components
import { BreadcrumbComponent } from '../../../module-shared/components/breadcrumb/breadcrumb.component';
// Pipes
import { FormatCurrencyPipe } from '../../../module-shared/pipes/formatCurrency.pipe';
// Services
import { ItemService } from '../../../module-shared/services/item.service';
import { ItemServiceStub } from '../../../module-shared/services/test/stubs/item.stub';

const route = {
  parent: {
    params: of({
      id: 'MLA767978732'
    })
  }
};

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let apiItemServices: ItemService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductComponent,
        // Components
        BreadcrumbComponent,
        // Pipes
        FormatCurrencyPipe
      ],
      imports: [
        TranslateModule.forChild(),
        HttpClientTestingModule,
        // Material
        MatProgressSpinnerModule
      ],
      providers: [
        TranslateStore,
        { provide: ActivatedRoute, useValue: route },
        { provide: ItemService, useClass: ItemServiceStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    apiItemServices = TestBed.get(ItemService);
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call apiItemService.getItemById', () => {
    let itemServiceSpy = spyOn(apiItemServices, 'getItemById');
    fixture.whenStable().then(() => {
      component.ngOnInit();
      expect(itemServiceSpy).toHaveBeenCalled();
    });
  });
});
