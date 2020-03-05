import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  totalSlides = 3;
  currentSlide = 1;

  constructor() { }

  next() {
    this.currentSlide += 1;
    if (this.currentSlide > this.totalSlides) {
      this.currentSlide = 1;
    }
  }

  prev() {
    this.currentSlide -= 1;
    if (this.currentSlide < 1) {
      this.currentSlide = this.totalSlides;
    }
  }

  current(value) {
    return value === this.currentSlide ? 'active' : '';
  }

}