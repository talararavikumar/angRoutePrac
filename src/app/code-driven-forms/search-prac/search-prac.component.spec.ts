import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPracComponent } from './search-prac.component';

describe('SearchPracComponent', () => {
  let component: SearchPracComponent;
  let fixture: ComponentFixture<SearchPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
