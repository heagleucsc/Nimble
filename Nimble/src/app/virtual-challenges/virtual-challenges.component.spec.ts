import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualChallengesComponent } from './virtual-challenges.component';

describe('VirtualChallengesComponent', () => {
  let component: VirtualChallengesComponent;
  let fixture: ComponentFixture<VirtualChallengesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualChallengesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
