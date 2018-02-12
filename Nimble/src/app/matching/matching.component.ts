import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  drawLine(){
	  //var icon = a.getBoundingClientRect();
	  //var term = b.getBoundingClientRect();
	  var test = document.getElementById("img");
	  var t = test.getBoundingClientRect();
	  console.log(t.left);
  }
}
