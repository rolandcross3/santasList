import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gifts-entry',
  templateUrl: './gifts-entry.component.html',
  styleUrls: ['./gifts-entry.component.css']
})
export class GiftsEntryComponent {

  @Output() giftOutput: EventEmitter<any> = new EventEmitter<any>();
  gift: String;
  
  kickback(item: String, person: String) {
    this.gift = person + ' gets ' + item;
    this.giftOutput.emit(this.gift);

  }
}
