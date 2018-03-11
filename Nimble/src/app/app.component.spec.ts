import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatchingComponent } from './matching/matching.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { IntroIconsComponent } from './intro-icons/intro-icons.component';
import { IntroNimbleComponent } from './intro-nimble/intro-nimble.component';
import { IntroTerminologyComponent } from './intro-terminology/intro-terminology.component';
import { EmailRwcComponent } from './email-rwc/email-rwc.component';
import { IconsTeachComponent } from './icons-teach/icons-teach.component';
import { IntroGesturesComponent } from './intro-gestures/intro-gestures.component';
import { IntroEmailComponent } from './intro-email/intro-email.component';
import { DesktopCanvasComponent } from './desktop-canvas/desktop-canvas.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MatchingComponent,
        FlashcardComponent,
        IntroIconsComponent,
        IntroNimbleComponent,
        IntroTerminologyComponent,
        EmailRwcComponent,
        IconsTeachComponent,
        IntroGesturesComponent,
        IntroEmailComponent,
        DesktopCanvasComponent,
        IntroTerminologyComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Nimble'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Nimble');
  }));
  it('should render help in the 1st button', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('help');
  }));
});
