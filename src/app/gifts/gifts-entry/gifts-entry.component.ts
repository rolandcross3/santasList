import { Component } from '@angular/core';
import { Gift } from '../models/';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/index';
import * as actions from '../../reducers/actions';

@Component({
  selector: 'gifts-entry',
  templateUrl: './gifts-entry.component.html',
  styleUrls: ['./gifts-entry.component.css']
})
export class GiftsEntryComponent {

  gift: Gift;

  constructor(private store: Store<State>) { }

  addGift(r: HTMLInputElement, i: HTMLInputElement) {
    this.store.dispatch(new actions.AddGift());


    // debugger;
    // this.gift = {
    //   recipient: r,
    //   items: [i],
    // };

    // this.giftOutput.emit(this.gift);

  }
}
