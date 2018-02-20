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

      while (currIcon == "") {
        randIcon = this.randomIcon();

        if (!left.includes(randIcon)) currIcon = randIcon;
      }

      left[i] = randIcon;
      right[i] = ICONS[currIcon];
    }
    this.shuffle(left);
    this.shuffle(right);
  }

  randomIcon(): string {
    var keys = Object.keys(ICONS);
    return keys[keys.length * Math.random() << 0];
  }

  // function taken from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffle(a:string[]): void {
    let j:number;
    let x:string;
    let i:number;

    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

  selectLeft(index:number): void {
    this.leftSelected = index;
    if (this.rightSelected != -1){
    this.evalAnswer(this.leftSelected, this.rightSelected);
	  }
  }

  selectRight(index:number): void {
    this.rightSelected = index;
    if (this.leftSelected != -1){
    this.evalAnswer(this.leftSelected, this.rightSelected);
	  }
  }

  evalAnswer(idxL:number, idxR:number): void {
    let iconKey:string = this.left[idxL];
    this.isCorrect = ICONS[iconKey] == this.right[idxR];

    this.drawLine(this.leftSelected, this.rightSelected, this.isCorrect);
    this.initializeSelections();
  }

  drawLine(indexLeft:number, indexRight:number, isCorrect:boolean) {
	  var leftY = 20 + indexLeft*34;
	  var rightY = 21 + indexRight*34;
	  
	  var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
	  var ctx = canvas.getContext("2d");

    ctx.strokeStyle = isCorrect ? "#00FF00" : "#FF0000";

	  ctx.beginPath();
	  ctx.moveTo(0, leftY);
	  ctx.lineTo(canvas.width, rightY);
	  ctx.stroke();
  }
}
