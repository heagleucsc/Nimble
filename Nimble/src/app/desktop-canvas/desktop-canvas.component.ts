import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-canvas',
  templateUrl: './desktop-canvas.component.html',
  styleUrls: ['./desktop-canvas.component.css']
})
export class DesktopCanvasComponent implements OnInit {

    finder = false;
    files = false;
    folder = false;
    email = false;
    inbox = false;
    displayMessage = false;
  
    constructor() { }

    ngOnInit() {
    	let bg = <HTMLImageElement> document.getElementById('bg');
	    let canvas = <HTMLCanvasElement> document.getElementById('desktopCanvas'),
	        ctx = canvas.getContext('2d');
	    canvas.height = bg.height;
		  canvas.width = Math.round(bg.height*(bg.naturalWidth/bg.naturalHeight));
    }

    login() {
    	let bg = <HTMLImageElement> document.getElementById('bg');
    	let login = <HTMLImageElement> document.getElementById('login');
    	bg.src = "../assets/desktop-canvas/macDesktop.png";
  		login.parentNode.removeChild(login);
      this.finder = true;
    }

    openFinder() {
      this.files = true;
    }

    openFolder() {
      this.folder = true;
    }

    startEmail() {
      this.finder = false;
      this.files = false;
      this.folder = false;
      this.email = true;
    }

    showInbox() {
      this.inbox = true;
    }

    showMessage() {
      this.displayMessage = true;
    }

    desktopDone() {
      this.finder = false;
      this.files = false;
      this.folder = false;
      this.email = false;
      this.inbox = false;
      this.displayMessage = false;
    }

}
