import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThispractComponent } from './thispract.component';

describe('ThispractComponent', () => {
  let component: ThispractComponent;
  let fixture: ComponentFixture<ThispractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThispractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThispractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
