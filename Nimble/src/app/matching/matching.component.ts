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
    this.initializeArrays(this.left, this.right);
    this.initializeSelections();
    let img = document.getElementById("img");
    let text = document.getElementById("text");
    let imgbox = img.getBoundingClientRect();
    let textbox = text.getBoundingClientRect();
    let canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
    canvas.width = textbox.left - imgbox.right - 92;
    canvas.height = 344;
  }

  initializeSelections(): void {
    this.leftSelected= -1;
    this.rightSelected= -1;
  }

  initializeArrays(left:string[], right:string[]): void {
    for (let i in left) {
      let currIcon:string = "";
      let randIcon:string;
      let modIconStr:string;

      while (currIcon == "") {
        console.log("attmepting icon select!");
        randIcon = this.randomIcon();
        modIconStr = `${this.imgFolder}${randIcon}`;

        if (!left.includes(modIconStr)) currIcon = randIcon;
      }

      left[i] = modIconStr;
      right[i] = ICONS[currIcon];
    }
  }

  randomIcon(): string {
    var keys = Object.keys(ICONS);
    return keys[keys.length * Math.random() << 0];
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
    this.initializeSelections();
  }

  drawLine(indexLeft:number, indexRight:number) {
	  console.log(indexLeft);
	  var leftY = 20 + indexLeft*34;
	  var rightY = 21 + indexRight*34;
	  
	  var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
	  var ctx = canvas.getContext("2d");
	  ctx.beginPath();
	  ctx.moveTo(0, leftY);
	  ctx.lineTo(canvas.width, rightY);
	  ctx.stroke();
	  console.log("Button Pushed!");
  }
}
