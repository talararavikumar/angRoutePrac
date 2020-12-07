import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L1c1Component } from './l1c1.component';

describe('L1c1Component', () => {
  let component: L1c1Component;
  let fixture: ComponentFixture<L1c1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1c1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L1c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
