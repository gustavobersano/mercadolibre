import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { SearchingItemComponent } from './searching-item.component';
// Pipes
import { FormatCurrencyPipe } from '../../../module-shared/pipes/formatCurrency.pipe';

const route = {
  parent: {
    params: of({
      id: 'MLA767978732'
    })
  }
};

describe('SearchingItemComponent', () => {
  let component: SearchingItemComponent;
  let fixture: ComponentFixture<SearchingItemComponent>;
  let router: Router;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchingItemComponent,
        // Pipes
        FormatCurrencyPipe
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: route },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingItemComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to Item View', () => {
    let navigateSpy = spyOn(router, 'navigate');
    component.onClick('MLA767978732');
    expect(navigateSpy).toHaveBeenCalledWith(['items', 'MLA767978732']);
  });

});
