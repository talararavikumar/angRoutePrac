import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadPracComponent } from './lazyload-prac.component';

describe('LazyloadPracComponent', () => {
  let component: LazyloadPracComponent;
  let fixture: ComponentFixture<LazyloadPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
