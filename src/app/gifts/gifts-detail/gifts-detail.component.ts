import { Component, OnInit } from '@angular/core';
import { Gift } from '../models/index';
import { Observable } from 'rxjs/Observable';
import { State, selectAllGifts } from '../../reducers/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'gifts-detail',
  templateUrl: './gifts-detail.component.html',
  styleUrls: ['./gifts-detail.component.css']
})
export class GiftsDetailComponent implements OnInit {

  allGifts$: Observable<any>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.allGifts$ = this.store.select(selectAllGifts);
  }

}
