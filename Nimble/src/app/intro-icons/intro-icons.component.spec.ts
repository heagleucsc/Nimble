import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroIconsComponent } from './intro-icons.component';

describe('IntroIconsComponent', () => {
  let component: IntroIconsComponent;
  let fixture: ComponentFixture<IntroIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
