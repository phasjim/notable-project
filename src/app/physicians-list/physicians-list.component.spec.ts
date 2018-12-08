import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiciansListComponent } from './physicians-list.component';

describe('PhysiciansListComponent', () => {
  let component: PhysiciansListComponent;
  let fixture: ComponentFixture<PhysiciansListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysiciansListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysiciansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
