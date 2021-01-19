import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegExPracComponent } from './reg-ex-prac.component';

describe('RegExPracComponent', () => {
  let component: RegExPracComponent;
  let fixture: ComponentFixture<RegExPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegExPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegExPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
