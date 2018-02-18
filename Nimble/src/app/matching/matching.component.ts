import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  imgFolder: string = "../../assets/matching/imgs/";
  left:string[] = ["", "", "", "", "", "", "", "", "", ""];
  right:string[] = ["", "", "", "", "", "", "", "", "", ""];

  constructor() {
  }

  ngOnInit() {
    this.initializeLeft(this.left);
    this.initializeRight(this.right);
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

  drawLine() {
    this.initializeLeft(this.left);
	  //var icon = a.getBoundingClientRect();
	  //var term = b.getBoundingClientRect();
	  var test = document.getElementById("img");
	  var t = test.getBoundingClientRect();
	  console.log(t.left);
  }
}
