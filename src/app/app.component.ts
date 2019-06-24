import { Component } from '@angular/core';
import { Pin } from './models/pin.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {



  selectedPin = null;



  editPin(clickedPin) {
    this.selectedPin = clickedPin;
  }

  deletePin(clickedPin: Pin) {
    /* var res =[];
  
        if(this.selectedPin === clickedPin)
        {
  
        res.push(clickedPin);
  
  }
  else {
    this.masterPinList.push(clickedPin);
  }
  
  return res;*/
  }

  finishedEditing() {
    this.selectedPin = null;
  }

  addPin(newPin: Pin) {
    // this.masterPinList.push(newPin);
  }
}
