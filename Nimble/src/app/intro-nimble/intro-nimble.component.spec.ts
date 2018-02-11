import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNimbleComponent } from './intro-nimble.component';

describe('IntroNimbleComponent', () => {
  let component: IntroNimbleComponent;
  let fixture: ComponentFixture<IntroNimbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroNimbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroNimbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
