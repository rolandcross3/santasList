import { Component } from '@angular/core';
import { Gift } from './models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Santa\'s List';
  currentGift= '';
  allGifts: Gift[] = [];

  getGift(g: Gift) {
    this.allGifts = [g, ...this.allGifts];
    console.log(this.allGifts);
    debugger;
  }
}
