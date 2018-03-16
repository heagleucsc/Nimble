import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroGesturesComponent } from './intro-gestures.component';

describe('IntroGesturesComponent', () => {
  let component: IntroGesturesComponent;
  let fixture: ComponentFixture<IntroGesturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroGesturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroGesturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
