import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroTerminologyComponent } from './intro-terminology.component';

describe('IntroTerminologyComponent', () => {
  let component: IntroTerminologyComponent;
  let fixture: ComponentFixture<IntroTerminologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroTerminologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroTerminologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
