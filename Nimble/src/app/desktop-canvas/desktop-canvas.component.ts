import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-canvas',
  templateUrl: './desktop-canvas.component.html',
  styleUrls: ['./desktop-canvas.component.css']
})
export class DesktopCanvasComponent implements OnInit {
<<<<<<< HEAD
=======

    icons = false;
    files = false;
    folder = false;
>>>>>>> Base desktop interactions
  
    constructor() { }

    ngOnInit() {
    	var bg = <HTMLImageElement> document.getElementById('bg');
	    var canvas = <HTMLCanvasElement> document.getElementById('desktopCanvas'),
	        ctx = canvas.getContext('2d');
	    canvas.height = bg.height;
<<<<<<< HEAD
		canvas.width = Math.round(bg.height*(bg.naturalWidth/bg.naturalHeight));
=======
		  canvas.width = Math.round(bg.height*(bg.naturalWidth/bg.naturalHeight));
>>>>>>> Base desktop interactions

	    // ctx.beginPath();
	    // ctx.moveTo(0, 0);
	    // ctx.lineTo(canvas.width, canvas.height);
	    // ctx.stroke();
    }

    nextImage() {
    	var bg = <HTMLImageElement> document.getElementById('bg');
    	var login = <HTMLImageElement> document.getElementById('login');
<<<<<<< HEAD
    	bg.src = "../assets/blank-desktop.jpg";
		login.parentNode.removeChild(login);
=======
    	bg.src = "../assets/blankDesktop.png";
  		login.parentNode.removeChild(login);
      this.icons = true;
    }

    openFinder() {
      this.files = true;
    }

    openFolder() {
      this.folder = true;
>>>>>>> Base desktop interactions
    }

}
