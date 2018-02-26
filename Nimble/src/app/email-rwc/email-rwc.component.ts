/* Citation: https://plnkr.co/edit/Y7hAyl02d5nhk2Rke3uO?p=preview from
https://stackoverflow.com/questions/43544910/angular-2-click-to-show-and-hide */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-rwc',
  templateUrl: './email-rwc.component.html',
  styleUrls: ['./email-rwc.component.css']
})
export class EmailRwcComponent implements OnInit {

  showHide1:Boolean;
  showHide2:Boolean;

  constructor() { 
  	this.showHide1 = false;
  	this.showHide2 = false;
  }

  ngOnInit() {
  }

  toggleHint1() {
    this.showHide1 = !this.showHide1;
  }

  toggleHint2() {
  	this.showHide2 = !this.showHide2;
  }
 
}
