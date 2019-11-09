 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  number = 0;
  i: number;

  Increase() {
    this.number = this.number + 1;
  }

  IncreaseTwice() {
    this.number = this.number * 2;
  }

  CanceredEvents() {
    for (this.i = 0; this.i < this.number; this.i++) {
      this.number = this.i + 1;
    }
  }

  AcceptEvent() {
    this.number = this.number + 0;
  }

  ngOnInit(): void {
  }

}
