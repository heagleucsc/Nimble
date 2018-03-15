import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Nimble';
  appStatus:string = "Intro";
  contStr:string = "Begin";

  setStatus(status: string): void {
      this.appStatus = status;
      this.contStr = this.appStatus === "Intro" ? "Begin" : "Continue";
  }

  contFun(): void {
    switch(this.appStatus) {
      case "Intro": {
        this.appStatus = "Flash";
      break;
      } case "Flash": {
        this.appStatus = "FlashGame";
      break;
      } case "FlashGame": {
        this.appStatus = "Match";
      break;
      } case "Match": {
        this.appStatus = "MatchGame";
      break;
      } case "MatchGame": {
        this.appStatus = "Gest";
      break;
      } case "Gest": {
        this.appStatus = "GestGame";
      break;
      } case "GestGame": {
        this.appStatus = "Mail";
      break;
      } case "Mail": {
        this.appStatus = "MailGame";
      break;
      } case "MailGame": {
        // ???
      break;
      }
    }
    this.contStr = this.appStatus === "Intro" ? "Begin" : "Continue";
  }
}
