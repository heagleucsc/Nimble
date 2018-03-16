import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsTeachDetailedComponent } from './icons-teach-detailed.component';

describe('IconsTeachDetailedComponent', () => {
  let component: IconsTeachDetailedComponent;
  let fixture: ComponentFixture<IconsTeachDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsTeachDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsTeachDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
