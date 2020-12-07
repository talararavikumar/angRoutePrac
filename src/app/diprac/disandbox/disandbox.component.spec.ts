import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DISandboxComponent } from './disandbox.component';

describe('DISandboxComponent', () => {
  let component: DISandboxComponent;
  let fixture: ComponentFixture<DISandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DISandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DISandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
