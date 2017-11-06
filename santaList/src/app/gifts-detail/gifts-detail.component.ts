import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gifts-detail',
  templateUrl: './gifts-detail.component.html',
  styleUrls: ['./gifts-detail.component.css']
})
export class GiftsDetailComponent implements OnInit {
  
  @Input() gifts: String[];
  
  constructor() { }

  ngOnInit() {
  }

}
