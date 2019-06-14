import { Component, OnInit } from '@angular/core';
import { Pin } from '../models/pin.model';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.css']
})
export class PinListComponent implements OnInit {
  pins: Pin[]=[
    new Pin('Book'),
    new Pin('Travel'),
];



  constructor() { }

  ngOnInit() {
  }

}
