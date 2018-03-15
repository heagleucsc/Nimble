import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FlashcardComponent } from './flashcard/flashcard.component';
import { VirtualcComponent } from './virtualc/virtualc.component';
=======
import { VirtualChallengesComponent } from './virtual-challenges/virtual-challenges.component';
>>>>>>> f5ede0df9a661a794790d5b67b629740373f7f93


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FlashcardComponent,
    VirtualcComponent
=======
    VirtualChallengesComponent
>>>>>>> f5ede0df9a661a794790d5b67b629740373f7f93
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
