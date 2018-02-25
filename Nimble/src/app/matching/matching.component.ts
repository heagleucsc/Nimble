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
	  var leftY = 20 + indexLeft*20;
	  var rightY = 20 + indexRight*20;
	  
	  var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
	  //canvas.width = t2.left+61;
	  //canvas.height = 340px;
	  var ctx = canvas.getContext("2d");
	  ctx.beginPath();
	  ctx.moveTo(0, leftY);
	  ctx.lineTo(canvas.width, rightY);
	  ctx.stroke();
  }
}
