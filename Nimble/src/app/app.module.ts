import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IntroIconsComponent } from './intro-icons/intro-icons.component';
import { IntroNimbleComponent } from './intro-nimble/intro-nimble.component';
import { IntroTerminologyComponent } from './intro-terminology/intro-terminology.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroIconsComponent,
    IntroNimbleComponent,
    IntroTerminologyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
