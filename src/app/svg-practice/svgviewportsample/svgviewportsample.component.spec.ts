import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgviewportsampleComponent } from './svgviewportsample.component';

describe('SvgviewportsampleComponent', () => {
  let component: SvgviewportsampleComponent;
  let fixture: ComponentFixture<SvgviewportsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgviewportsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgviewportsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
