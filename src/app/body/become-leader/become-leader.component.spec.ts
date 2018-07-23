import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeLeaderComponent } from './become-leader.component';

describe('BecomeLeaderComponent', () => {
  let component: BecomeLeaderComponent;
  let fixture: ComponentFixture<BecomeLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
