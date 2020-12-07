import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsRaceComponent } from './ns-race.component';

describe('NsRaceComponent', () => {
  let component: NsRaceComponent;
  let fixture: ComponentFixture<NsRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
