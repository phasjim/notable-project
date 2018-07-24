import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  imageIndex: number = 1;
  recentlyClicked: boolean = false;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if(!this.recentlyClicked) {
        this.onNextClick();
      }
      this.recentlyClicked = false;
    }, 1000*5); // Advances picture every 5 seconds
  }

  getImageSrc() {
    return '/assets/carousel/' + this.imageIndex + '.png';
  }

  onBackClick() {
    if(this.imageIndex === 1) {
      this.imageIndex = 10;
    } else {
      this.imageIndex--;
    }

    this.recentlyClicked = true;
  }

  onNextClick() {
    if(this.imageIndex === 10) {
      this.imageIndex = 1;
    } else {
      this.imageIndex++;
    }
    
    this.recentlyClicked = true;
  }

}
