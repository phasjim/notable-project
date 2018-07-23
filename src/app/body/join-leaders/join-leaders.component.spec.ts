import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinLeadersComponent } from './join-leaders.component';

describe('JoinLeadersComponent', () => {
  let component: JoinLeadersComponent;
  let fixture: ComponentFixture<JoinLeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinLeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
