import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  keyword = [
		["Term", "Definition"],
		//General
  	["Cursor", "A cursor is the position indicator on a computer display screen where a user can enter text"],
  	["Mouse", "A hand-operated input device used to manipulate objects on a computer screen"],
  	["Monitor", "A display screen used to provide visual output from a computer, cable box, video camera, VCR or other video generating device"],
  	["Desktop", "Primary user interface of a computer which displays  the background (or wallpaper) and icons of files and folders you may have saved to the desktop"],
		["Keyboard", "A panel of keys that operate a computer or typewriter"],
		["Application", "An application program is a software program that runs on your computer. Web browsers, e-mail programs, word processors, games, and utilities are all applications"],
		["Shortcut", "An icon that points to a program or data file"],
		//Email
		["Compose", "Write an email or message"],
		["Inbox Folder", "A repository in an e-mail application that accepts incoming messages"],
		["Outbox Folder", "A repository where outgoing messages are placed"],
		["Spam", "A type of electronic spam where unsolicited messages are sent by email"],
		["Attach a File", "To link a file to an e-mail message so that they travel together to their destination"],
		["Subject", "A short title/description of the message"],
		["To", "Text field where you input the email address(es) of recipients of the email"],
		["Carbon Copy (CC)", "Text field where you insert email address(es) to send a copy of the email being sent. CC will show the CC recipients within the email"],
		["Blind Carbon Copy (BCC)", "Text field where you insert email address(es) to send a copy of an email, but does not show recipients of the email that you sent it to any BCC contact"],
		//Word Processing
		["Font", "A specific typeface of a certain size and style"],
		["Bold", "Designating or pertaining to a style of printing-types in which the letters usually have a strong or vivid appearance"],
		["Italicize", "Designating or pertaining to a style of printing-types in which the letters usually slope to the right, patterned upon a compact manuscript hand, and used for emphasis, to separate different kinds of information"],
		["Underline", "To mark with a line or lines underneath; underscore."],
		["Alignment", "Arrangement of text or graphics relative to a margin"],
		["Spacing", "Amount of white space between lines of text in a paragraph"],
		["Bullet Points", "Each of several items in a list, preceded by a bullet symbol for emphasis"],
		["Numbered Lists", "Each of several items in a list, preceded by a number for emphasis"],
		["Save", "an act of saving data to a storage location, usually the hard drive"],
		["Save As", "an act of saving data to a storage location, usually the hard drive"],
		["Undo", "Reverses the most recent change"],
		["Redo", "Opposite of undo"],
		//Browsing
		["Search Engine", "A program that searches for and identifies items in a database that correspond to keywords or characters specified by the user"],
		["Redo", "Reverses the most recent change"],
		["History", "List of previously visited websites"],
		["Back", "Return to the previous page"],
		["Forward", "Reverses the most recent change"],
		["Redo", "Opposite of back (Like redo instead of undo)"],
		["Refresh", "Update the display on a screen (reloads the current page)"],
		["Tab", "Allows you to have  multiple web pages open in the same window"],
		["URL", "The address of a webpage. If you would like to share a webpage with someone, you would send them the address of the webpage. (This action is commonly referred to as “sending a link”)"],
		["Bookmarks", "These features make it easy to access your favorite sites. If you like to check your email everyday, you can create a bookmark to the website so that you do not need to search for it each time."],
		["Minimize", "Temporarily move the page out of the way (usually to the bottom of the screen)"],
		["Maximize/Full screen", "Make the page fill the screen."],
		["Link (Hyperlink)", "a link from a hypertext file or document to another location or file, typically activated by clicking on a highlighted word or image on the screen."],
		//Keyboard
		["CAPS Lock", "While this button is on (usually indicated by a light on the key itself), all letters typed will be in UPPERCASE instead of lowercase."],
		["Shift", "Holding down this button while pressing a letter will capitalize the letter. To access the upper rows of symbols (such as the symbols above the number keys), hold down the shift key while pressing a letter."],
		["Return/Enter", "Creates a newline while typing in a word processor and can also be used to advance to the next line."],
		["Keyboard Shortcuts", "a key or combination of keys providing quick access to a particular function within a computer program."],
		//Mobile
		["Display", "Refers to the way you see your screen. Under this category in the settings menu you can adjust aspects of the display such as the brightness."],
		["Settings", "A menu that allows you to tinker with various aspects of your device. The settings menu on your device typically has various “Accessibility Settings” which you can enable to make your device easier to use."],
		["App/Application", "Basic apps (programs) are included with your device such as Calendar, Clock, Camera, etc. You can also download apps from the App Store/Play Store (some are free and others must be purchased) to add more programs to your phone. There are many different kinds of apps ranging from games to productivity."],
		["Home", "The home button will take you to the main part of your device. Your apps can be found on your home page and if you have too many apps to fit on the first page, you will need to swipe horizontally to view the other pages. You can also press this button while the device is asleep (dark) in order to wake it up to use it."],
		["Camera", "You can take pictures on most mobile devices. Just look for the camera application [image]. In order to take a photograph, you press the shutter button which is usually a large round button on the screen."],
		["Rear-facing camera", "This camera can be found on the back of your device, opposite your screen."],
		["Front-facing camera", "This camera can be found on the same side as your screen. It is convenient for taking “selfies” (a picture you take of yourself, or you and a group of people) because you can see yourself while taking a picture."],
		["Power button", "Pressing this button allows you wake and sleep the screen. Holding down this button will give you the option to turn off your device. On most devices, a confirmation will appear on screen asking if you actually want to turn off your device. If your device does not wake up after pressing the power or home button, your device may turned off or out of battery. Holding down the power button will turn your device back on. If this still does not work, your device may be out of battery and you need to charge it."],
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
  	this.index = (this.index - 1 + this.total_cards) % this.total_cards;
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