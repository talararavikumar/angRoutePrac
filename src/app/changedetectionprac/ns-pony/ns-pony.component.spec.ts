import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsPonyComponent } from './ns-pony.component';

describe('NsPonyComponent', () => {
  let component: NsPonyComponent;
  let fixture: ComponentFixture<NsPonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsPonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsPonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
