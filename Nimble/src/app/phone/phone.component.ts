import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goHome(){
	console.log('Button pushed!');
	let img = <HTMLImageElement>document.getElementById("screen");
	img.src= "../../assets/phone/home.png";
  }
  
  nextActivity(){
	let img = <HTMLImageElement>document.getElementById("screen");
	img.src= "../../assets/phone/home.png";
  }

}
