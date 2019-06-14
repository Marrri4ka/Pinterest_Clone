import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Pin } from '../models/pin.model';

@Component({
  selector: 'app-new-pin',
  templateUrl: './new-pin.component.html',
  styleUrls: ['./new-pin.component.css']
})
export class NewPinComponent  {
@Output() sendPin = new EventEmitter();
submitForm(name :string){
let newPin: Pin = new Pin(name);
this.sendPin.emit(newPin);
}

}
