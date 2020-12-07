import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L1L2c1L3c1Component } from './l1-l2c1-l3c1.component';

describe('L1L2c1L3c1Component', () => {
  let component: L1L2c1L3c1Component;
  let fixture: ComponentFixture<L1L2c1L3c1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1L2c1L3c1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L1L2c1L3c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
