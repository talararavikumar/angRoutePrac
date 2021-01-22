import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHooksPracComponent } from './life-cycle-hooks-prac.component';

describe('LifeCycleHooksPracComponent', () => {
  let component: LifeCycleHooksPracComponent;
  let fixture: ComponentFixture<LifeCycleHooksPracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleHooksPracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleHooksPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
