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
	//Hide unnecessary buttons
	let e1 = <HTMLImageElement>document.getElementById("e1");
	e1.style.display = "none";
	
	let e2 = <HTMLImageElement>document.getElementById("e2");
	e2.style.display = "none";
	
	let e3 = <HTMLImageElement>document.getElementById("e3");
	e3.style.display = "none";
	
	let e4 = <HTMLImageElement>document.getElementById("e4");
	e4.style.display = "none";
	
	let e5 = <HTMLImageElement>document.getElementById("e5");
	e5.style.display = "none";
	
	let inbox = <HTMLImageElement>document.getElementById("inbox");
	inbox.style.display = "none";
	
	console.log('Button pushed!');
	let img = <HTMLImageElement>document.getElementById("screen");
	img.src= "../../assets/phone/home.png";
	
	//Show app button
	let app = <HTMLImageElement>document.getElementById("app");
	app.style.display = "block";
  }
  
  openApp(){
	 //hide unnecessary buttons
	let app = <HTMLImageElement>document.getElementById("app");
	app.style.display = "none";
	
	let inbox = <HTMLImageElement>document.getElementById("inbox");
	inbox.style.display = "none";
	
	let img = <HTMLImageElement>document.getElementById("screen");
    img.src = "../../assets/phone/email.jpg";

	// show email buttons
	
	let e1 = <HTMLImageElement>document.getElementById("e1");
	e1.style.display = "block";
	
	let e2 = <HTMLImageElement>document.getElementById("e2");
	e2.style.display = "block";
	
	let e3 = <HTMLImageElement>document.getElementById("e3");
	e3.style.display = "block";
	
	let e4 = <HTMLImageElement>document.getElementById("e4");
	e4.style.display = "block";
	
	let e5 = <HTMLImageElement>document.getElementById("e5");
	e5.style.display = "block";
  }
  
  openEmail(email){
	//hide unnecessary buttons
	let app = <HTMLImageElement>document.getElementById("app");
	app.style.display = "none";
	
	let e1 = <HTMLImageElement>document.getElementById("e1");
	e1.style.display = "none";
	
	let e2 = <HTMLImageElement>document.getElementById("e2");
	e2.style.display = "none";
	
	let e3 = <HTMLImageElement>document.getElementById("e3");
	e3.style.display = "none";
	
	let e4 = <HTMLImageElement>document.getElementById("e4");
	e4.style.display = "none";
	
	let e5 = <HTMLImageElement>document.getElementById("e5");
	e5.style.display = "none";
	
	let img = <HTMLImageElement>document.getElementById("screen");
    img.src = "../../assets/phone/" + email + ".jpg";	
	
	//Show inbox button
	let inbox = <HTMLImageElement>document.getElementById("inbox");
	inbox.style.display = "block";
  }

}
