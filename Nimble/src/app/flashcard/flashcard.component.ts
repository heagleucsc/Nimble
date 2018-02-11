import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  flipcard(): void {
	console.log("Hello World!");
	var term = document.getElementById("term");
	console.log(term);
	if(term.style.display == "block") {
		term.style.display = "none";
	} else {
		term.style.display = "block";
	}

	var definition = document.getElementById("definition");
	console.log(definition);
	if(definition.style.display == "block") {
		definition.style.display = "none";
	} else {
		definition.style.display = "block";
	}

  }

}