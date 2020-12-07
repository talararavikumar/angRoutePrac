import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stackingcontext2Component } from './stackingcontext2.component';

describe('Stackingcontext2Component', () => {
  let component: Stackingcontext2Component;
  let fixture: ComponentFixture<Stackingcontext2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stackingcontext2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stackingcontext2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
