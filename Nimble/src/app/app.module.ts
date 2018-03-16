import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatchingComponent } from './matching/matching.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { VirtualcComponent } from './virtualc/virtualc.component';
import { IntroIconsComponent } from './intro-icons/intro-icons.component';
import { IntroNimbleComponent } from './intro-nimble/intro-nimble.component';
import { IntroTerminologyComponent } from './intro-terminology/intro-terminology.component';
import { PhoneComponent } from './phone/phone.component';
import { EmailRwcComponent } from './email-rwc/email-rwc.component';
import { IconsTeachComponent } from './icons-teach/icons-teach.component';
import { IntroGesturesComponent } from './intro-gestures/intro-gestures.component';
import { IntroEmailComponent } from './intro-email/intro-email.component';
import { IconsTeachDetailedComponent } from './icons-teach-detailed/icons-teach-detailed.component';
import { NimbleHelpComponent } from './nimble-help/nimble-help.component';
import { VideoChatComponent } from './video-chat/video-chat.component';




@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    VirtualcComponent,
    MatchingComponent,
    FlashcardComponent,
    IntroIconsComponent,
    IntroNimbleComponent,
    IntroTerminologyComponent,
    PhoneComponent,
    EmailRwcComponent,
    IconsTeachComponent,
    IntroGesturesComponent,
    IntroEmailComponent,
    IconsTeachDetailedComponent,
    NimbleHelpComponent,
    VideoChatComponent
  ],

  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
