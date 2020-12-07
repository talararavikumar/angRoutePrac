import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBindingPracComponent } from './host-binding-prac.component';

describe('HostBindingPracComponent', () => {
  let component: HostBindingPracComponent;
  let fixture: ComponentFixture<HostBindingPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostBindingPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostBindingPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
