import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailRwcComponent } from './email-rwc.component';

describe('EmailRwcComponent', () => {
  let component: EmailRwcComponent;
  let fixture: ComponentFixture<EmailRwcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailRwcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailRwcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
