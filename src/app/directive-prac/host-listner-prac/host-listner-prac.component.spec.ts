import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListnerPracComponent } from './host-listner-prac.component';

describe('HostListnerPracComponent', () => {
  let component: HostListnerPracComponent;
  let fixture: ComponentFixture<HostListnerPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostListnerPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostListnerPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
