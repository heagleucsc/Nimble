import { Component, OnInit, Input } from '@angular/core';
import {ORDER} from '../app.component';

@Component({
  selector: 'app-desktop-canvas',
  templateUrl: './desktop-canvas.component.html',
  styleUrls: ['./desktop-canvas.component.css']
})
export class DesktopCanvasComponent implements OnInit {
    @Input() activityStatus = 0;
    ORDER = ORDER;

    // Set all interactive elements to hidden by default
    finder = false;
    files = false;
    folder = false;
    email = false;
    inbox = false;
    displayMessage = false;
    GestGame = false;
    EmailGame = false;

    constructor() { }

    // Load in the background image and overlay drawable canvas
    ngOnInit() {
    	let bg = <HTMLImageElement> document.getElementById('bg');
	    let canvas = <HTMLCanvasElement> document.getElementById('desktopCanvas'),
	        ctx = canvas.getContext('2d');
	    canvas.height = bg.height;
		  canvas.width = Math.round(bg.height*(bg.naturalWidth/bg.naturalHeight));
      this.getMessage();
    }

    getMessage(){
      let text;
      console.log(this.activityStatus);
      if(this.activityStatus == ORDER.MailGame3){ 
        text = "Challenge: Launch the email app and read an email.";
        this.EmailGame = true;
        startEmail();
      } 
      if(this.activityStatus == ORDER.GestGame2) {
        text = "Challenge: Login to your desktop using any password and then locate a file using finder.";
        this.GestGame = true;
      }
      document.getElementById("info").innerHTML = text;
    }

    // On user input to the password box, load the next set of icons/images
    login() {
    	let bg = <HTMLImageElement> document.getElementById('bg');
    	let login = <HTMLImageElement> document.getElementById('login');
    	bg.src = "../assets/desktop-canvas/macDesktop.png";
  		login.parentNode.removeChild(login);
      this.finder = true;
    }

    // On user input to click finder, load the basic file system
    openFinder() {
      this.files = true;
    }

    // On user input to click the folder, load the file
    openFolder() {
      this.folder = true;
    }

    // Start of the next section, hide all elements unique to the previous section
    startEmail() {
      this.finder = false;
      this.files = false;
      this.folder = false;
      this.email = true;
    }

    // On user input to click the email icon, load the email applicaiton
    showInbox() {
      this.inbox = true;
    }

    // On user input to click the 
    showMessage() {
      this.displayMessage = true;
    }

    // Start of the next section, hide all elements unique to the previous section
    desktopDone() {
      this.finder = false;
      this.files = false;
      this.folder = false;
      this.email = false;
      this.inbox = false;
      this.displayMessage = false;
    }

}
