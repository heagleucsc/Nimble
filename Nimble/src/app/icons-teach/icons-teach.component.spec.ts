import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsTeachComponent } from './icons-teach.component';

describe('IconsTeachComponent', () => {
  let component: IconsTeachComponent;
  let fixture: ComponentFixture<IconsTeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsTeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
