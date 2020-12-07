import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsImgComponent } from './ns-img.component';

describe('NsImgComponent', () => {
  let component: NsImgComponent;
  let fixture: ComponentFixture<NsImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
