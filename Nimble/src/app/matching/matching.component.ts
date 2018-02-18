import { Component, OnInit } from '@angular/core';
import { ICONS } from '../../assets/matching/icons';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  imgFolder: string = "../../assets/matching/imgs/";
  left:string[] = ["", "", "", "", "", "", "", "", "", ""];
  right:string[] = ["", "", "", "", "", "", "", "", "", ""];
  leftSelected:number;
  rightSelected:number;
  isCorrect:boolean;

  constructor() {
  }

  ngOnInit() {
    this.initiailizeEverything();
  }

  initiailizeEverything(): void {
    this.initializeLeft(this.left);
    this.initializeRight(this.right);
    this.leftSelected= -1;
    this.rightSelected= -1;
    var img = document.getElementById("img");
    var text = document.getElementById("text");
    var imgbox = img.getBoundingClientRect();
    var textbox = text.getBoundingClientRect();
    var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
    canvas.width = textbox.left - imgbox.right - 92;
    canvas.height = 344px;
  }

  initializeLeft(left:string[]): void {
    for (let i in left) {
      left[i] = `${this.imgFolder}icon_add.png`;
    }
  }

  initializeRight(right:string[]): void {
    for (let i in right) {
      right[i] = `[placeholder]`;
    }
  }

  selectLeft(index:number): void {
	console.log(index);
    this.leftSelected = index;
    if (this.rightSelected != -1){
	  console.log("Line should be drawn");
	  this.drawLine(this.leftSelected, this.rightSelected);
      this.evalAnswer(this.leftSelected, this.rightSelected);
	}
  }

  selectRight(index:number): void {
	console.log(index);
    this.rightSelected = index;
    if (this.leftSelected != -1){
	  console.log("Line should be drawn");
	  this.drawLine(this.leftSelected, this.rightSelected);
      this.evalAnswer(this.leftSelected, this.rightSelected);
	}
  }

  evalAnswer(idxL:number, idxR:number): void {
    this.isCorrect = ICONS[idxL] == this.right[idxR];

    if (this.isCorrect) {

    } else {

    }
    this.initiailizeEverything();
  }

  drawLine(indexLeft:number, indexRight:number) {
	  console.log(indexLeft);
	  var leftY = 20 + indexLeft*20;
	  var rightY = 20 + indexRight*20;
	  //var icon = a.getBoundingClientRect();
	  //var term = b.getBoundingClientRect();
	  var test1 = document.getElementById("img");
	  var test2 = document.getElementById("text");
	  var t1 = test1.getBoundingClientRect();
	  var t2 = test2.getBoundingClientRect();
	  
	  var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
	  // canvas.width = t2.left;
	  // canvas.height = 340px;
	  var ctx = canvas.getContext("2d");
	  ctx.beginPath();
	  ctx.moveTo(0, leftY);
	  ctx.lineTo(canvas.width, rightY);
	  ctx.stroke();
	  console.log("Button Pushed!");
	  console.log(t1.left);
	  console.log(t1.bottom);
  }
}
