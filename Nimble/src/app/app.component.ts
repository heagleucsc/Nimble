import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nimble';
  appStatus = {
      isIntro: true,
      isFlash: false,
      isMatch: false,
      isGest: false,
      isMail: false
  }

  setStatus(status: string): void {
      Object.keys(this.appStatus).forEach(s => this.appStatus[s] = false);
      this.appStatus[status] = true;
  }
}
