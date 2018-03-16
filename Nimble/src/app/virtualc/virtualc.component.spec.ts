import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualcComponent } from './virtualc.component';

describe('VirtualcComponent', () => {
  let component: VirtualcComponent;
  let fixture: ComponentFixture<VirtualcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
