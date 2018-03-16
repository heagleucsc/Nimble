import { Component } from '@angular/core';

enum ORDER {
    Intro = 0,
    Flash,
    FlashGame,
    Match,
    MatchTeach1,
    MatchTeach2,
    MatchGame,
    Gest,
    GestGame,
    Mail,
    MailTeach,
    MailGame
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ORDER = ORDER;

  title:string = 'Nimble';
  appStatus = ORDER.Intro;
  contStr:string = "Begin";

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
               this.appStatus === ORDER.GestGame;
      } case "Mail": {
        return this.appStatus === ORDER.Mail ||
               this.appStatus === ORDER.MailTeach ||
               this.appStatus === ORDER.MailGame;
      }
    }
  }

  setStatus(status): void {
      this.appStatus = status;
      this.contStr = this.appStatus === ORDER.Intro ? "Begin" : "Continue";
  }

  contFun(): void {
    this.appStatus++;
    this.contStr = this.appStatus === ORDER.Intro ? "Begin" : "Continue";
  }
}
