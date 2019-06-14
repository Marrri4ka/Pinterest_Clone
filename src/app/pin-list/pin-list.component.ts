import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Pin } from '../models/pin.model';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.css']
})
export class PinListComponent  {
  @Input() childPinList: Pin[];
  @Output() clickSender = new EventEmitter();
  
  pins: Pin[]=[
    new Pin('Book'),
    new Pin('Travel'),
  ];

  editPin(pinToEdit: Pin){
    this.clickSender.emit(pinToEdit);
  }

  constructor() { }

  ngOnInit() {
  }

}
