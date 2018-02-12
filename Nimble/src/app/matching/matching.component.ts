import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  imgFolder: string = "../../assets/matching/imgs/";
  left:string[10] = ["", "", "", "", "", "", "", "", "", ""];
  right:string[10] = ["", "", "", "", "", "", "", "", "", ""];


  constructor() {
  }

  ngOnInit() {
  }

  initializeLeft(left:string[]): void {
    for img in left {
      img = `${this.imgFolder}mag.png`;
      console.log(img);
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
