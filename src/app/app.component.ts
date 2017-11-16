import { Component, OnInit } from '@angular/core';
import { Gift } from './gifts/models/index';
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
        // countdown method I should add this stuff to the store...
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const currentDate = today.getDate();
        const todaystring = months[currentMonth] + ' ' + currentDate + ', ' + currentYear;
        const futurestring = months[11] + ' ' + 25 + ', ' + 2017;
        const difference = (Math.round((Date.parse(futurestring) - Date.parse(todaystring)) / (24 * 60 * 60 * 1000)) * 1);
        const result = difference + ' Days Until Christmas!!';
        // end countdown method
        observer.next(result);
      }, 1000);
    });
  }

}

