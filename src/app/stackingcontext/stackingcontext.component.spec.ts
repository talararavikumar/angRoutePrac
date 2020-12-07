import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackingcontextComponent } from './stackingcontext.component';

describe('StackingcontextComponent', () => {
  let component: StackingcontextComponent;
  let fixture: ComponentFixture<StackingcontextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackingcontextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackingcontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
