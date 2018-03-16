import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroEmailComponent } from './intro-email.component';

describe('IntroEmailComponent', () => {
  let component: IntroEmailComponent;
  let fixture: ComponentFixture<IntroEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
