import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdSandboxComponent } from './cd-sandbox.component';

describe('CdSandboxComponent', () => {
  let component: CdSandboxComponent;
  let fixture: ComponentFixture<CdSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
