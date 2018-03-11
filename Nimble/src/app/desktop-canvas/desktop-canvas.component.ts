import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-canvas',
  templateUrl: './desktop-canvas.component.html',
  styleUrls: ['./desktop-canvas.component.css']
})
export class DesktopCanvasComponent implements OnInit {
    deskIter:number = 0;
    deskImg:string = `../assets/desktop-canvas/${this.deskIter}.png`;

    constructor() { }

    ngOnInit() {
    	let bg = <HTMLImageElement> document.getElementById('bg');
	    let canvas = <HTMLCanvasElement> document.getElementById('desktopCanvas'),
      ctx = canvas.getContext('2d');

	    canvas.height = bg.height;
		  canvas.width = Math.round(bg.height*(bg.naturalWidth/bg.naturalHeight));

	    // ctx.beginPath();
	    // ctx.moveTo(0, 0);
	    // ctx.lineTo(canvas.width, canvas.height);
	    // ctx.stroke();
    }

    nextImage() {
      if (this.deskIter == 0) {
    	  let login = <HTMLImageElement> document.getElementById('login');

        login.parentNode.removeChild(login);
      }

      this.deskIter++;
    }

}
