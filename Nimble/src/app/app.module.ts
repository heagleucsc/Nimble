import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatchingComponent } from './matching/matching.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { IntroIconsComponent } from './intro-icons/intro-icons.component';
import { IntroNimbleComponent } from './intro-nimble/intro-nimble.component';
import { IntroTerminologyComponent } from './intro-terminology/intro-terminology.component';
import { PhoneComponent } from './phone/phone.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchingComponent,
    FlashcardComponent,
    IntroIconsComponent,
    IntroNimbleComponent,
    IntroTerminologyComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
