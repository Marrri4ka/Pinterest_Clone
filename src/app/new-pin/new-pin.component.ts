import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Pin } from '../models/pin.model';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-new-pin',
  templateUrl: './new-pin.component.html',
  styleUrls: ['./new-pin.component.css'],
  providers: [PinService]

})
export class NewPinComponent implements OnInit {


  submitForm(name: string, category: string, date: Date) {
    var newPin: Pin = new Pin(name, category, date);
    this.pinService.addPin(newPin);
  }

  constructor(private pinService: PinService) { }

  ngOnInit() {

  }

}
