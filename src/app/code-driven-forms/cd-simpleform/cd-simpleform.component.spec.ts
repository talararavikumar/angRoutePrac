import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdSimpleformComponent } from './cd-simpleform.component';

describe('CdSimpleformComponent', () => {
  let component: CdSimpleformComponent;
  let fixture: ComponentFixture<CdSimpleformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdSimpleformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdSimpleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
