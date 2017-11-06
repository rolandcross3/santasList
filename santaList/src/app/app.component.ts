import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Santa\'s List';
  currentGift= '';
  allGifts = [];

  getGift(g: string) {
    this.allGifts.push(g);
    debugger;
  }
}
