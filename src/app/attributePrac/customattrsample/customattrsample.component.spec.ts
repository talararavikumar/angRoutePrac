import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomattrsampleComponent } from './customattrsample.component';

describe('CustomattrsampleComponent', () => {
  let component: CustomattrsampleComponent;
  let fixture: ComponentFixture<CustomattrsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomattrsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomattrsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
