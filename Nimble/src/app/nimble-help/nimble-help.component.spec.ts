import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NimbleHelpComponent } from './nimble-help.component';

describe('NimbleHelpComponent', () => {
  let component: NimbleHelpComponent;
  let fixture: ComponentFixture<NimbleHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NimbleHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NimbleHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
