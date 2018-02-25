import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

	keyword = [
		["Ni hao", "Hello"],
		["Zai jian", "Goodbye"],
		["Wei shen me", "Why"],
		["Hao jiu mei jian", "Long time no see"],
		["Xie xie", "thank you"]
	]

  index = 0;
  total_cards = this.keyword.length;

  constructor() { }

  ngOnInit() {
  	document.getElementById("email term").innerHTML = "Term: " + this.keyword[this.index][0];
  	document.getElementById("email definition").innerHTML = "Definition: " + this.keyword[this.index][1];
  }

  rotatecard(): void {
  	this.index = (this.index + 1) % this.total_cards;
  	document.getElementById("email term").innerHTML = "Term: " + this.keyword[this.index][0];
  	document.getElementById("email definition").innerHTML = "Definition: " + this.keyword[this.index][1];
	}
	
  backcard(): void {
  	this.index = (this.index - 1 + this.total_cards) % this.total_cards;
  	console.log(this.index);
  	document.getElementById("email term").innerHTML = "Term: " + this.keyword[this.index][0];
  	document.getElementById("email definition").innerHTML = "Definition: " + this.keyword[this.index][1];
  }

  flipcard(): void {
	var term = document.getElementById("email term");
	if(term.style.display == "block") {
		term.style.display = "none";
	} else {
		term.style.display = "block";
	}

	var definition = document.getElementById("email definition");
	if(definition.style.display == "block") {
		definition.style.display = "none";
	} else {
		definition.style.display = "block";
	}

  }

}
