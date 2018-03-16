import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustSettingsComponent } from './adjust-settings.component';

describe('AdjustSettingsComponent', () => {
  let component: AdjustSettingsComponent;
  let fixture: ComponentFixture<AdjustSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
