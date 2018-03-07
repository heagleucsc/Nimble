import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtualc',
  templateUrl: './virtualc.component.html',
  styleUrls: ['./virtualc.component.css']
})
export class VirtualcComponent implements OnInit {
  keyword = [
    ["../../assets/virtualc/compose_gmail.png", "../../assets/virtualc/compose_c_gmail.png"],
    ["../../assets/virtualc/compose_apple.png", "../../assets/virtualc/compose_c_apple.png"],
    ["../../assets/virtualc/compose_m_apple.png", "../../assets/virtualc/compose_m_c_apple.png"],
    ["../../assets/virtualc/compose_m_gmail.png", "../../assets/virtualc/compose_m_c_gmail.png"]
  ];

  index = 0;
  termSrc = this.keyword[this.index][0];
  defnSrc = this.keyword[this.index][1];
  total_cards = this.keyword.length;

  constructor() { }

  ngOnInit() {
	  var term = document.getElementById("term");
    var definition = document.getElementById("definition");
    term.style.display = "block";
    definition.style.display = "none";

    this.termSrc = this.keyword[this.index][0];
  	this.defnSrc = this.keyword[this.index][1];
  }

  rotatecard(): void {
  	this.index = (this.index + 1) % this.total_cards;
  	this.termSrc =  this.keyword[this.index][0];
  	this.defnSrc =  this.keyword[this.index][1];
	}
	
	backcard(): void {
  	this.index = (this.index - 1) % this.total_cards;
  	this.termSrc = this.keyword[this.index][0];
    this.defnSrc = this.keyword[this.index][1];
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