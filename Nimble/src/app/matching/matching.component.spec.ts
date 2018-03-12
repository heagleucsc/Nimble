import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingComponent } from './matching.component';

describe('MatchingComponent', () => {
  let component: MatchingComponent;
  let fixture: ComponentFixture<MatchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should populated both arrays on initArrays', () => {
    const left = component.left;
    const right = component.right;
    component.initArrays();
    const leftEmptyIdx = left.indexOf("");
    const rightEmptyIdx = right.indexOf("");
    expect(leftEmptyIdx).toEqual(-1);
    expect(rightEmptyIdx).toEqual(-1);
  });
});
