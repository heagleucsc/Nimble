import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VirtualChallengesComponent } from './virtual-challenges/virtual-challenges.component';


@NgModule({
  declarations: [
    AppComponent,
    VirtualChallengesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
