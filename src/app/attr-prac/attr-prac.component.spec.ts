import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrPracComponent } from './attr-prac.component';

describe('AttrPracComponent', () => {
  let component: AttrPracComponent;
  let fixture: ComponentFixture<AttrPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
