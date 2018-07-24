import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formName: string = "";
  formEmail: string = "";
  formCityAndCountry: string = "";
  formTwitter: string = "";
  formComment: string = "";

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("--------------------");
    console.log("Name: " + this.formName);
    console.log("Email: " + this.formEmail);
    console.log("City & Country: " + this.formCityAndCountry);
    console.log("Twitter: " + this.formTwitter);
    console.log("Comment: " + this.formComment);
    console.log("--------------------");
  }
}
