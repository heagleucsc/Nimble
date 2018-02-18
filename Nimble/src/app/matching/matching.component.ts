import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

//  imgFolder: string = "../../assets/matching/imgs/";
//  left:string[10] = ["", "", "", "", "", "", "", "", "", ""];
//  right:string[10] = ["", "", "", "", "", "", "", "", "", ""];


  constructor() {
  }

  ngOnInit() {
    var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
    var cdiv = document.getElementById("cdiv");
    // canvas.width = cdiv.clientWidth/4;
    // canvas.height = cdiv.clientHeight;
    this.drawLine();
  }

//  initializeLeft(left:string[]): void {
//    for (img in left) {
//      img = `${this.imgFolder}mag.png`;
//      console.log(img);
//    }
//  }

  drawLine() {
//    this.initializeLeft(this.left);
	  //var icon = a.getBoundingClientRect();
	  //var term = b.getBoundingClientRect();
	  var img = document.getElementById("img");
    var text = document.getElementById("text");

	  var imgCoord = img.getBoundingClientRect();
    var textCoord = img.getBoundingClientRect();
	  // console.log(t.left);
    var c = <HTMLCanvasElement> document.getElementById("myCanvas");
    c.width = textCoord.left + 61;
    c.height = 340px;
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(1000,1000);
    ctx.stroke();
  }
}
