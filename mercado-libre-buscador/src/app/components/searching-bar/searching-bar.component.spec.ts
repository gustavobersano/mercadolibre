import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { SearchingBarComponent } from './searching-bar.component';
// Material
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('SearchingBarComponent', () => {
  let component: SearchingBarComponent;
  let fixture: ComponentFixture<SearchingBarComponent>;
  let router: Router;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingBarComponent ],
      imports: [
        RouterTestingModule,
        TranslateModule.forChild(),
        // Material
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
      ],
      providers: [
        TranslateStore
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingBarComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router)
    fixture.detectChanges();
  });

  function initForm() {
    component.formSearch = new FormGroup({
      query: new FormControl(),
    });
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not navigate to Items View without input', () => {
    initForm();
    component.formSearch.controls['query'].setValue('');
    let navigateSpy = spyOn(router, 'navigate');
    component.onSubmit();
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  it('should navigate to Items View with input', () => {
    initForm();
    component.formSearch.controls['query'].setValue('Computadora Asus');
    let navigateSpy = spyOn(router, 'navigate');
    component.onSubmit();
    expect(navigateSpy).toHaveBeenCalledWith(['items']);
  });

  it('should navigate to Home Page', () => {
    let navigateSpy = spyOn(router, 'navigate');
    component.onClickML();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });
});
