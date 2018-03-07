import { Component, OnInit } from '@angular/core';
import { ICONS } from '../../assets/matching/icons';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  quizLength:number = 10;
  // path to prepend to imgs
  imgDir:string = "../../assets/matching/imgs/";
  // values stored into the img/text divs
  left:string[] = [];
  right:string[] = [];
  // selected imgs/texts
  leftSelected:number = -1;
  rightSelected:number = -1;
  // number of wrong/right answers
  numWrong:number = 0;
  numRight:number = 0;
  // for tracking incorrect answers
  wrongList:boolean[] = [];
  wasWrong:boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.buildCanvas();
    this.restartQuiz();
  }

  buildCanvas(): void {
    let canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
    let img = document.getElementById("img");
    let text = document.getElementById("text");
    let imgbox = img.getBoundingClientRect();
    let textbox = text.getBoundingClientRect();

    // sets canvas width based on #text & #img positions and widths
    canvas.width = textbox.left - imgbox.right - 228;
    canvas.height = 344; // height of img/text * 10 + margin/padding
  }

  initSelections(): void {
    this.leftSelected = this.rightSelected = -1;
  }

  initArrays(): void {
    this.numWrong = 0;

    // loop through arrays and set to unused icon
    for (let i = 0; i < this.quizLength; i++) {
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

  initWrongs(): void {
    for (let i = 0; i < this.quizLength; i++)
        this.wrongList[i] = false;
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

  // sets respective Selected to idx of clicked img/text
  select(idx:number, side:string, other:string): void {
    // remove wrong icon indicator if selecting new icon
    this.wasWrong = false;

    // check if idx is already selected, unselect if so
    let alreadySelected:boolean = this[`${side}Selected`] === idx;
    this[`${side}Selected`] = alreadySelected ? -1 : this[`${side}Selected`] = idx;

    // if other Selected is set, evaluate the answer
    if (this[`${other}Selected`] !== -1)
      this.evalAnswer(this.leftSelected, this.rightSelected);
  }

  evalAnswer(idxL:number, idxR:number): void {
    let iconKey:string = this.left[idxL]; // img value of selected text
    // compare text value of selected icon and selected text value
    let isCorrect = ICONS[iconKey] === this.right[idxR];

    // draw line and increment right if comparison is correct, increment wrong if not
    if (isCorrect) {
        this.drawLine(this.leftSelected, this.rightSelected);
        this.numRight++;
    } else if (this.numWrong < 10) {
        this.wasWrong = true;

        // check if we already marked this icon as wrong
        if (!this.wrongList[idxL]) {
            this.numWrong++;
            this.wrongList[idxL] = true;
        }
    }

    // reset Selecteds
    this.initSelections();
  }

  drawLine(indexLeft:number, indexRight:number): void {
    // calculate Y value of line; 34 is height of img/text
	  let leftY = 20 + indexLeft * 34; // position next to img
	  let rightY = 21 + indexRight * 34; // position next to text
	  let canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
	  let ctx = canvas.getContext("2d");

    // draw actual line
    ctx.strokeStyle = "#00FF00";
	  ctx.beginPath();
	  ctx.moveTo(0, leftY);
	  ctx.lineTo(canvas.width, rightY);
	  ctx.stroke();
  }

  // reset quiz on completion
  restartQuiz(): void {
    this.initSelections();
    this.initArrays();
    this.initWrongs();
    this.numWrong = this.numRight = 0;

    // clear canvas of lines
    let canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
