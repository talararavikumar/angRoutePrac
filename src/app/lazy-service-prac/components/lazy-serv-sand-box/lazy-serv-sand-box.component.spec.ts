import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyServSandBoxComponent } from './lazy-serv-sand-box.component';

describe('LazyServSandBoxComponent', () => {
  let component: LazyServSandBoxComponent;
  let fixture: ComponentFixture<LazyServSandBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyServSandBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyServSandBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
