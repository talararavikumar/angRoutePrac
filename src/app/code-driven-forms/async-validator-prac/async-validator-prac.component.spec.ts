import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncValidatorPracComponent } from './async-validator-prac.component';

describe('AsyncValidatorPracComponent', () => {
  let component: AsyncValidatorPracComponent;
  let fixture: ComponentFixture<AsyncValidatorPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncValidatorPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncValidatorPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
