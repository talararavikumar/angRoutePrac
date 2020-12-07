import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderPracComponent } from './render-prac.component';

describe('RenderPracComponent', () => {
  let component: RenderPracComponent;
  let fixture: ComponentFixture<RenderPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
