import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivepPracComponent } from './directivep-prac.component';

describe('DirectivepPracComponent', () => {
  let component: DirectivepPracComponent;
  let fixture: ComponentFixture<DirectivepPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivepPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivepPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
