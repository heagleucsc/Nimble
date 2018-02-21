import { Component, OnInit } from '@angular/core';
import { ICONS } from '../../assets/matching/icons';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  imgDir: string = "../../assets/matching/imgs/";
  left:string[] = ["", "", "", "", "", "", "", "", "", ""];
  right:string[] = ["", "", "", "", "", "", "", "", "", ""];
  leftSelected:number = -1;
  rightSelected:number = -1;

  constructor() {
  }

  ngOnInit() {
    this.initSelections();
    this.initArrays();

    let img = document.getElementById("img");
    let text = document.getElementById("text");
    let imgbox = img.getBoundingClientRect();
    let textbox = text.getBoundingClientRect();
    let canvas = <HTMLCanvasElement> document.getElementById("myCanvas");

    canvas.width = textbox.left - imgbox.right - 92;
    canvas.height = 344;
  }

  initSelections(): void {
    this.leftSelected = this.rightSelected = -1;
  }

  initArrays(): void {
    for (let i in this.left) {
      let currIcon:string = "";
      let randIcon:string;

      while (currIcon == "")
        if (!this.left.includes(randIcon = this.randomIcon()))
          currIcon = randIcon;

      this.left[i] = randIcon;
      this.right[i] = ICONS[currIcon];
    }
    this.shuffle(this.left);
    this.shuffle(this.right);
  }

  randomIcon(): string {
    let keys = Object.keys(ICONS);
    return keys[keys.length * Math.random() << 0];
  }

  // function taken from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffle(arr:string[]): void {
    let ran:number;
    let ranVal:string;
    let idx:number;

    for (idx = arr.length - 1; idx > 0; idx--) {
      ran = Math.floor(Math.random() * (idx + 1));
      ranVal = arr[idx];
      arr[idx] = arr[ran];
      arr[ran] = ranVal;
    }
  }

  select(idx:number, side:string, other:string): void {
    this[`${side}Selected`] = idx;
    if (this[`${other}Selected`] !== -1) {
      this.evalAnswer(this.leftSelected, this.rightSelected);
    }
  }

  evalAnswer(idxL:number, idxR:number): void {
    let iconKey:string = this.left[idxL];
    let isCorrect = ICONS[iconKey] === this.right[idxR];

    this.drawLine(this.leftSelected, this.rightSelected, isCorrect);
    this.initSelections();
  }

  drawLine(indexLeft:number, indexRight:number, isCorrect:boolean) {
	  let leftY = 20 + indexLeft * 34;
	  let rightY = 21 + indexRight * 34;
	  let canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
	  let ctx = canvas.getContext("2d");

    ctx.strokeStyle = isCorrect ? "#00FF00" : "#FF0000";
	  ctx.beginPath();
	  ctx.moveTo(0, leftY);
	  ctx.lineTo(canvas.width, rightY);
	  ctx.stroke();
  }
}
