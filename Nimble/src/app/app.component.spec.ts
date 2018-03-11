import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatchingComponent } from './matching/matching.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { IntroIconsComponent } from './intro-icons/intro-icons.component';
import { IntroNimbleComponent } from './intro-nimble/intro-nimble.component';
import { IntroTerminologyComponent } from './intro-terminology/intro-terminology.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MatchingComponent,
        FlashcardComponent,
        IntroIconsComponent,
        IntroNimbleComponent,
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
  it('should only have 1 section active at a time', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const appStatus = fixture.debugElement.componentInstance.appStatus;
    let numStatus = 0;
    for (let key in appStatus) if (appStatus[key]) numStatus++;
    expect(numStatus).toEqual(1);
  }));
});
