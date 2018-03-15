import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopCanvasComponent } from './desktop-canvas.component';

describe('DesktopCanvasComponent', () => {
  let component: DesktopCanvasComponent;
  let fixture: ComponentFixture<DesktopCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
