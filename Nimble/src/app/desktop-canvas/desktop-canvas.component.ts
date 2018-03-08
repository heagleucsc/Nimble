import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-canvas',
  templateUrl: './desktop-canvas.component.html',
  styleUrls: ['./desktop-canvas.component.css']
})
export class DesktopCanvasComponent implements OnInit {
  
    constructor() { }

    ngOnInit() {
    	var bg = <HTMLImageElement> document.getElementById('bg');
	    var canvas = <HTMLCanvasElement> document.getElementById('desktopCanvas'),
	        ctx = canvas.getContext('2d');
	    canvas.height = bg.height;
		canvas.width = Math.round(bg.height*(bg.naturalWidth/bg.naturalHeight));

	    // ctx.beginPath();
	    // ctx.moveTo(0, 0);
	    // ctx.lineTo(canvas.width, canvas.height);
	    // ctx.stroke();
    }

    nextImage() {
    	var bg = <HTMLImageElement> document.getElementById('bg');
    	var login = <HTMLImageElement> document.getElementById('login');
    	bg.src = "../assets/blank-desktop.jpg";
		login.parentNode.removeChild(login);
    }

}
