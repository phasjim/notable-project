import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinToptalLeadersComponent } from './join-toptal-leaders.component';

describe('JoinToptalLeadersComponent', () => {
  let component: JoinToptalLeadersComponent;
  let fixture: ComponentFixture<JoinToptalLeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinToptalLeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinToptalLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
