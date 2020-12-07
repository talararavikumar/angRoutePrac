import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L1c2Component } from './l1c2.component';

describe('L1c2Component', () => {
  let component: L1c2Component;
  let fixture: ComponentFixture<L1c2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1c2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L1c2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
