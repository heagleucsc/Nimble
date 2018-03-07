import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-challenges',
  templateUrl: './virtual-challenges.component.html',
  styleUrls: ['./virtual-challenges.component.css']
})
export class VirtualChallengesComponent implements OnInit {

  keyword = [
    ["Picture", "Picture"],
    ['.../assets/compose_m_apple.png','.../assets/compose_m_c_apple.png'],
  ];

  index = 0;
  total_cards = this.keyword.length;

  constructor() { }

  ngOnInit() {
    document.getElementById("term").innerHTML = "Term: " + this.keyword[this.index][0];
  	document.getElementById("definition").innerHTML = "Definition: " + this.keyword[this.index][1];
  }

  rotatecard(): void {
  	this.index = (this.index + 1) % this.total_cards;
  	document.getElementById("term").innerHTML = "Term: " + this.keyword[this.index][0];
  	document.getElementById("definition").innerHTML = "Definition: " + this.keyword[this.index][1];
	}
	
	backcard(): void {
  	this.index = (this.index - 1) % this.total_cards;
  	document.getElementById("term").innerHTML = "Term: " + this.keyword[this.index][0];
  	document.getElementById("definition").innerHTML = "Definition: " + this.keyword[this.index][1];
  }

  flipcard(): void {
	var term = document.getElementById("term");
	if(term.style.display == "block") {
		term.style.display = "none";
	} else {
		term.style.display = "block";
	}

	var definition = document.getElementById("definition");
	if(definition.style.display == "block") {
		definition.style.display = "none";
	} else {
		definition.style.display = "block";
	}

  }

}
