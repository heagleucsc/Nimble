import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  source = "../../assets/email/imgs/";

	keyword = [
		["icon_attach.jpeg", "Add an Attachment"],
		["icon_compose.jpeg", "Compose an Email"],
		["icon_search.jpeg", "Search"],
		["icon_send.jpeg", "Send"],
		["icon_trash.jpeg", "Delete"]
	];

  index = 0;
  total_cards = this.keyword.length;

  constructor() { }

  ngOnInit() {
   document.getElementById("term").innerHTML = "<img src = " + this.source + this.keyword[this.index][0] + " style = 'max-height: 60px;'>";
  	document.getElementById("definition").innerHTML = this.keyword[this.index][1];
  }

  rotatecard(): void {
  	this.index = (this.index + 1) % this.total_cards;
  	document.getElementById("term").innerHTML = "<img src = " + this.source + this.keyword[this.index][0] + " style = 'max-height: 60px;'>";
  	document.getElementById("definition").innerHTML = this.keyword[this.index][1];
	}

  backcard(): void {
  	this.index = (this.index - 1 + this.total_cards) % this.total_cards;
  	document.getElementById("term").innerHTML = "<img src = " + this.source + this.keyword[this.index][0] + " style = 'max-height: 60px;'>";
  	document.getElementById("definition").innerHTML = this.keyword[this.index][1];
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
