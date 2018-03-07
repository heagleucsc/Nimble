import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  source = "../../assets/email/imgs/";

	keyword = [
		["icon_attach.png", "Add an Attachment"],
		["icon_compose.png", "Compose an Email"],
		["icon_search.png", "Search"],
		["icon_send.png", "Send"],
		["icon_trash.png", "Delete"]
	];

  index = 0;
  total_cards = this.keyword.length;

  constructor() { }

  ngOnInit() {
   //  img = document.createElement("img");
   //  img.setAttribute("src", this.source + this.keyword[this.index][0]);
  	// parent = document.getElementById("email term");
   //  parent.parentNode.replaceChild(img, parent);
   console.log(this.source + this.keyword[this.index][0]);
   console.log(document.getElementById("email term"));
   document.getElementById("email term").innerHTML = "Term: <img src = " + this.source + this.keyword[this.index][0] + " style = 'max-height: 30px; max-width: 30px;'>";
  	document.getElementById("email definition").innerHTML = "Definition: " + this.keyword[this.index][1];
  }

  rotatecard(): void {
  	this.index = (this.index + 1) % this.total_cards;
  	document.getElementById("email term").innerHTML = "Term: <img src = " + this.source + this.keyword[this.index][0] + " style = 'max-height: 30px; max-width: 30px;'>";
  	document.getElementById("email definition").innerHTML = "Definition: " + this.keyword[this.index][1];
	}
	
  backcard(): void {
  	this.index = (this.index - 1 + this.total_cards) % this.total_cards;
  	// console.log(this.index);
  	document.getElementById("email term").innerHTML = "Term: <img src = " + this.source + this.keyword[this.index][0] + " style = 'max-height: 30px; max-width: 30px;'>";
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
