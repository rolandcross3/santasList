import { Component, OnInit } from '@angular/core';
import { Gift } from './models/index';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Santa\'s List';
  currentGift = '';
  allGifts: Gift[] = [];
  daysTillChristmas: Observable<string>;
  daysLeft$: Observable<any>;

  ngOnInit() {
    this.daysLeft$ = Observable.create(function subscribe(observer) {
      const id = setInterval(() => {
        // countdown method
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const currentDate = today.getDate();
        const todaystring = months[currentMonth] + ' ' + currentDate + ', ' + currentYear;
        const futurestring = months[11] + ' ' + 25 + ', ' + 2017;
        const difference = (Math.round((Date.parse(futurestring) - Date.parse(todaystring)) / (24 * 60 * 60 * 1000)) * 1);
        const result = difference + ' Days Until Christmas!!';
        // console.log(result);
        // end countdown method
        observer.next(result);
      }, 1000);
    });
  }

  getGift(g: Gift) {
    this.allGifts = [g, ...this.allGifts];
    console.log(this.allGifts);
  }

  countdown() {
    // i need to figue out why this wont run err: _this.countdown is not a function
    // something to do w/ hoisting i think
    // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // const today = new Date();
    // const currentYear = today.getFullYear();
    // const currentMonth = today.getMonth();
    // const currentDate = today.getDate();
    // const todaystring = months[currentMonth] + ' ' + currentDate + ', ' + currentYear;
    // const futurestring = months[11] + ' ' + 25 + ', ' + 2017;
    // const difference = (Math.round((Date.parse(futurestring) - Date.parse(todaystring)) / (24 * 60 * 60 * 1000)) * 1);
    // console.log(difference);
    // return difference + 'days until Christmas';
  }
}

