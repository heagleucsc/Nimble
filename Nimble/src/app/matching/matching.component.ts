import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  drawLine(){
	  //var icon = a.getBoundingClientRect();
	  //var term = b.getBoundingClientRect();
	  var test1 = document.getElementById("img");
	  var test2 = document.getElementById("text");
	  var t1 = test1.getBoundingClientRect();
	  var t2 = test2.getBoundingClientRect();
	  
	  var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
	  var ctx = canvas.getContext("2d");
	  ctx.beginPath();
	  ctx.moveTo(0, 0);
	  ctx.lineTo(canvas.width, 20);
	  ctx.stroke();
	  console.log("Button Pushed!");
	  console.log(t1.left);
	  console.log(t1.bottom);
  }
}


