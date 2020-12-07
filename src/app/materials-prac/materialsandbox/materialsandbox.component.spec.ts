import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsandboxComponent } from './materialsandbox.component';

describe('MaterialsandboxComponent', () => {
  let component: MaterialsandboxComponent;
  let fixture: ComponentFixture<MaterialsandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialsandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
