import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  keyword = [
  	["term", "definition"],
  	["buzz", "lightyear"],
  	["sheriff", "woody"],
  	["uzumaki", "naruto"],
  	["uchiha", "sasuke"],
  	["haruno", "sakura"]
  ];

  index = 0;
  total_cards = this.keyword.length;

  constructor() { }

  ngOnInit() {
  	document.getElementById("term").innerHTML = "term: " + this.keyword[this.index][0];
  	document.getElementById("definition").innerHTML = "definition: " + this.keyword[this.index][1];
  }

  rotatecard(): void {
  	this.index = (this.index + 1) % this.total_cards;
  	document.getElementById("term").innerHTML = "term: " + this.keyword[this.index][0];
  	document.getElementById("definition").innerHTML = "definition: " + this.keyword[this.index][1];
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