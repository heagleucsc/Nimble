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
  it('should size the canvas width correctly', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const canvas = compiled.querySelector('canvas');
    const img = compiled.querySelector('#img');
    const text = compiled.querySelector('#text');
    const imgbox = img.getBoundingClientRect();
    const textbox = text.getBoundingClientRect();
    const expectedWidth = textbox.left - imgbox.right;
    expect(canvas.width).toEqual(expectedWidth);
  }));
});
