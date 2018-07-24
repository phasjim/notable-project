import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HeaderComponent implements OnInit {
  isMenuDisplayed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onDisplayMenuClick(isDisplayed: boolean) {
    this.isMenuDisplayed = isDisplayed;
  }

  /* Automatically closes the menu if the window width >= 600px */
  onResize(event){
    if(event.target.innerWidth >= 600) {
      this.isMenuDisplayed = false;
    }
  }

}
