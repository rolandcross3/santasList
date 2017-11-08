import { Component, Output, EventEmitter } from '@angular/core';
import { Gift } from '../models/';

@Component({
  selector: 'gifts-entry',
  templateUrl: './gifts-entry.component.html',
  styleUrls: ['./gifts-entry.component.css']
})
export class GiftsEntryComponent {

  @Output() giftOutput: EventEmitter<any> = new EventEmitter<any>();
  gift: Gift;

  kickback(i: string, r: string, q:number) {
    debugger;
    this.gift = {
      recipient: r,
      item: i,
      quantity: q

    };
    this.giftOutput.emit(this.gift);

  }
}
