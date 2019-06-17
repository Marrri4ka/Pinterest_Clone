import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Pin } from '../models/pin.model';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.css']
})
export class PinListComponent  {
  filterType: string = "AZ";
  @Input() childPinList: Pin[];
  @Output() clickSender = new EventEmitter();

  editPin(pinToEdit: Pin){
    this.clickSender.emit(pinToEdit);
  }

  onChange(optionMenu){
    this.filterType = optionMenu;
  }

  constructor() { }

  ngOnInit() {
  }

}
