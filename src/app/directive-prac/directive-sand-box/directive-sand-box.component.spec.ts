import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveSandBoxComponent } from './directive-sand-box.component';

describe('DirectiveSandBoxComponent', () => {
  let component: DirectiveSandBoxComponent;
  let fixture: ComponentFixture<DirectiveSandBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveSandBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveSandBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
