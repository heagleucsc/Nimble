import { Component, OnInit, Input } from '@angular/core';
import {ORDER} from '../app.component';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  @Input() activityStatus = 0;
  ORDER = ORDER;
  
  constructor() { }

  ngOnInit() {
	console.log(this.activityStatus);
	//check which activity it is 
	this.getMessage();
  }
  
  getMessage(){
	var text1, text2;
	
	if(this.activityStatus == ORDER.MailGame2){ 
	   text1 = "Challenge: Open the email app. Click on an email to open it. Return to the inbox by clicking the inbox button.";
	   text2 = "Open Emails on Your Phone";
	}else{
	   text1 = "Challenge: Open an app by clicking on its icon, and return to the home screen by clicking the home button.";
	   text2 = "Learn How to Open Apps";
	}	
	document.getElementById("info").innerHTML = text1;
	document.getElementById("title").innerHTML = text2;
  }

  goHome(){
	//Hide unnecessary buttons
	this.hideAllButtons();
	
	//Switch images
	let img = <HTMLImageElement>document.getElementById("screen");
    img.src = "../../assets/phone/home.png";
	
	//Show app buttons
	let email = <HTMLImageElement>document.getElementById("email");
	email.style.display = "block";
	let messApp = <HTMLImageElement>document.getElementById("message");
	messApp.style.display = "block";
	let calApp = <HTMLImageElement>document.getElementById("calender");
	calApp.style.display = "block";
	let photoApp = <HTMLImageElement>document.getElementById("photo");
	photoApp.style.display = "block";
	let camApp = <HTMLImageElement>document.getElementById("camera");
	camApp.style.display = "block";
	let weathApp = <HTMLImageElement>document.getElementById("weather");
	weathApp.style.display = "block";
	let clockApp = <HTMLImageElement>document.getElementById("clock");
	clockApp.style.display = "block";
	let mapApp = <HTMLImageElement>document.getElementById("map");
	mapApp.style.display = "block";
	let videoApp = <HTMLImageElement>document.getElementById("video");
	videoApp.style.display = "block";
	let wallApp = <HTMLImageElement>document.getElementById("wallet");
	wallApp.style.display = "block";
	let notesApp = <HTMLImageElement>document.getElementById("notes");
	notesApp.style.display = "block";
	let remApp = <HTMLImageElement>document.getElementById("stocks");
	remApp.style.display = "block";
	let stockApp = <HTMLImageElement>document.getElementById("reminder");
	stockApp.style.display = "block";
	let itunesApp = <HTMLImageElement>document.getElementById("itunes");
	itunesApp.style.display = "block";
	let appStoreApp = <HTMLImageElement>document.getElementById("appStore");
	appStoreApp.style.display = "block";
	let ibooksApp = <HTMLImageElement>document.getElementById("ibooks");
	ibooksApp.style.display = "block";
	let healthApp = <HTMLImageElement>document.getElementById("health");
	healthApp.style.display = "block";
	let phoneApp = <HTMLImageElement>document.getElementById("phone");
	phoneApp.style.display = "block";
	let safariApp = <HTMLImageElement>document.getElementById("safari");
	safariApp.style.display = "block";
	let musicApp = <HTMLImageElement>document.getElementById("music");
	musicApp.style.display = "block";
	let settingsApp = <HTMLImageElement>document.getElementById("settings");
	settingsApp.style.display = "block";
  }
  
  openAppEmail(){
	 //hide unnecessary buttons
	this.hideAllButtons();
	
	//Switch images
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
	this.hideAllButtons();

    //Switch images
	let img = <HTMLImageElement>document.getElementById("screen");
    img.src = "../../assets/phone/" + email + ".jpg";	
	
	//Show inbox button
	let inbox = <HTMLImageElement>document.getElementById("inbox");
	inbox.style.display = "block";
  }
  
  openApp(type){
	console.log(type);
	
	//hide unnecessary buttons
	this.hideAllButtons();
	
	//switch screens
	let img = <HTMLImageElement>document.getElementById("screen");
    img.src = "../../assets/phone/" + type + ".jpg";
  }
  
  hideAllButtons(){
	let emailApp = <HTMLImageElement>document.getElementById("email");
	emailApp.style.display = "none";
	
	let messApp = <HTMLImageElement>document.getElementById("message");
	messApp.style.display = "none";
	
	let calApp = <HTMLImageElement>document.getElementById("calender");
	calApp.style.display = "none";
	
	let photoApp = <HTMLImageElement>document.getElementById("photo");
	photoApp.style.display = "none";
	
	let camApp = <HTMLImageElement>document.getElementById("camera");
	camApp.style.display = "none";
	
	let weathApp = <HTMLImageElement>document.getElementById("weather");
	weathApp.style.display = "none";
	
	let clockApp = <HTMLImageElement>document.getElementById("clock");
	clockApp.style.display = "none";
	
	let mapApp = <HTMLImageElement>document.getElementById("map");
	mapApp.style.display = "none";
	
	let videoApp = <HTMLImageElement>document.getElementById("video");
	videoApp.style.display = "none";
	
	let wallApp = <HTMLImageElement>document.getElementById("wallet");
	wallApp.style.display = "none";
	
	let notesApp = <HTMLImageElement>document.getElementById("notes");
	notesApp.style.display = "none";
	
	let remApp = <HTMLImageElement>document.getElementById("reminder");
	remApp.style.display = "none";
	
	let stockApp = <HTMLImageElement>document.getElementById("stocks");
	stockApp.style.display = "none";
	
	let itunesApp = <HTMLImageElement>document.getElementById("itunes");
	itunesApp.style.display = "none";
	
	let appStoreApp = <HTMLImageElement>document.getElementById("appStore");
	appStoreApp.style.display = "none";
	
	let ibooksApp = <HTMLImageElement>document.getElementById("ibooks");
	ibooksApp.style.display = "none";
	
	let healthApp = <HTMLImageElement>document.getElementById("health");
	healthApp.style.display = "none";
	
	let phoneApp = <HTMLImageElement>document.getElementById("phone");
	phoneApp.style.display = "none";
	
	let safariApp = <HTMLImageElement>document.getElementById("safari");
	safariApp.style.display = "none";
	
	let musicApp = <HTMLImageElement>document.getElementById("music");
	musicApp.style.display = "none";
	
	let settingsApp = <HTMLImageElement>document.getElementById("settings");
	settingsApp.style.display = "none";
	
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
  }

}
