import { Component, OnInit, Input } from '@angular/core';
import { Gift } from '../models/index';

@Component({
  selector: 'gifts-detail',
  templateUrl: './gifts-detail.component.html',
  styleUrls: ['./gifts-detail.component.css']
})
export class GiftsDetailComponent implements OnInit {

  @Input() gifts: Gift[];

  constructor() { }

  ngOnInit() {
  }

}
