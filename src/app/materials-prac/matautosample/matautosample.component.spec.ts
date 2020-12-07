import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatautosampleComponent } from './matautosample.component';

describe('MatautosampleComponent', () => {
  let component: MatautosampleComponent;
  let fixture: ComponentFixture<MatautosampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatautosampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatautosampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
