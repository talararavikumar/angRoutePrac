import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImScSvgspriteComponent } from './im-sc-svgsprite.component';

describe('ImScSvgspriteComponent', () => {
  let component: ImScSvgspriteComponent;
  let fixture: ComponentFixture<ImScSvgspriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImScSvgspriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImScSvgspriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
