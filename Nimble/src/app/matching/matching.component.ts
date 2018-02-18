import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

<<<<<<< HEAD
//  imgFolder: string = "../../assets/matching/imgs/";
//  left:string[10] = ["", "", "", "", "", "", "", "", "", ""];
//  right:string[10] = ["", "", "", "", "", "", "", "", "", ""];

=======
  imgFolder: string = "../../assets/matching/imgs/";
  answers: {[key: string]: string};
  left:string[] = ["", "", "", "", "", "", "", "", "", ""];
  right:string[] = ["", "", "", "", "", "", "", "", "", ""];
  leftSelected:number;
  rightSelected:number;
  isRight:boolean;
>>>>>>> 02af3b23b148cd0a97c8d069d727ef548dcc87b2

  constructor() {
  }

  ngOnInit() {
<<<<<<< HEAD
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
=======
    this.initializeLeft(this.left);
    this.initializeRight(this.right);
    this.leftSelected= -1;
    this.rightSelected= -1;
  }

  initializeLeft(left:string[]): void {
    for (let i in left) {
      left[i] = `${this.imgFolder}mag.png`;
    }
  }

  initializeRight(right:string[]): void {
    for (let i in right) {
      right[i] = `[placeholder]`;
    }
  }
>>>>>>> 02af3b23b148cd0a97c8d069d727ef548dcc87b2

  selectLeft(index:number): void {
    this.leftSelected = index;
    if (this.rightSelected != -1)
      this.isRight = this.evalAnswer(this.leftSelected, this.rightSelected);
  }

  selectRight(index:number): void {
    this.rightSelected = index;
    if (this.leftSelected != -1)
      this.isRight = this.evalAnswer(this.leftSelected, this.rightSelected);
  }

  evalAnswer(idxL:number, idxR:number): boolean {
    let result:boolean = this.answers[idxL] == this.right[idxR];
    
    

    return result;
  }

  drawLine() {
//    this.initializeLeft(this.left);
	  //var icon = a.getBoundingClientRect();
	  //var term = b.getBoundingClientRect();
<<<<<<< HEAD
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
=======
	  var test1 = document.getElementById("img");
	  var test2 = document.getElementById("text");
	  var t1 = test1.getBoundingClientRect();
	  var t2 = test2.getBoundingClientRect();
	  
	  var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
	  //canvas.width = t2.left+61;
	  //canvas.height = 340px;
	  var ctx = canvas.getContext("2d");
	  ctx.beginPath();
	  ctx.moveTo(0, 20);
	  ctx.lineTo(canvas.width, 20);
	  ctx.stroke();
	  console.log("Button Pushed!");
	  console.log(t1.left);
	  console.log(t1.bottom);
>>>>>>> 02af3b23b148cd0a97c8d069d727ef548dcc87b2
  }
}
