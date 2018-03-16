import { Component } from '@angular/core';

// Order of app components to be played through
enum ORDER {
    Intro = 0,
    Flash,
    FlashGame,
    Match,
    MatchTeach1,
    MatchTeach2,
    MatchGame,
    Gest,
    GestGame2,
    GestGame3,
    Mail,
    MailTeach,
    MailGame,
    MailRWC
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // allows html code to read enum
  ORDER = ORDER;

  title:string = 'Nimble';
  contStr:string = "Begin";
  appStatus = ORDER.Intro;

  // check which is current status to update highlighted sidebar button
  chkStatus(status:string): boolean {
    switch(status) {
      case "Intro": {
        return this.appStatus === ORDER.Intro;
      } case "Flash": {
        return this.appStatus === ORDER.Flash ||
               this.appStatus === ORDER.FlashGame;
      } case "Match": {
        return this.appStatus === ORDER.Match ||
               this.appStatus === ORDER.MatchTeach1 ||
               this.appStatus === ORDER.MatchTeach2 ||
               this.appStatus === ORDER.MatchGame;
      } case "Gest": {
        return this.appStatus === ORDER.Gest ||
               this.appStatus === ORDER.GestGame2 ||
               this.appStatus === ORDER.GestGame3;
      } case "Mail": {
        return this.appStatus === ORDER.Mail ||
               this.appStatus === ORDER.MailTeach ||
               this.appStatus === ORDER.MailGame ||
               this.appStatus === ORDER.MailRWC;
      }
    }
  }

  // sets status on clicking sidebar button
  setStatus(status): void {
      this.appStatus = status;
      this.contStr = this.appStatus === ORDER.Intro ? "Begin" : "Continue";
  }

  // sets status on clicking begin/continue
  contFun(): void {
    this.appStatus++;
    this.contStr = this.appStatus === ORDER.Intro ? "Begin" : "Continue";
  }
}
