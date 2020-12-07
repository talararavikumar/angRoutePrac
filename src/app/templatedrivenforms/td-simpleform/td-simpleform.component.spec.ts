import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdSimpleformComponent } from './td-simpleform.component';

describe('TdSimpleformComponent', () => {
  let component: TdSimpleformComponent;
  let fixture: ComponentFixture<TdSimpleformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdSimpleformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdSimpleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
