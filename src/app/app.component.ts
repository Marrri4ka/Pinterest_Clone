import { Component } from '@angular/core';
import { Pin } from './models/pin.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedPin = null;

  masterPinList: [Pin] = [
    new Pin('book','Literatue',new Date()),
    new Pin('film', 'Oscar',new Date()),
    new Pin('film', 'Oscar',new Date())
  ]

  editPin(clickedPin){
    this.selectedPin = clickedPin;
  }

  deletePin(clickedPin:Pin){
    var res =[];

        if(this.selectedPin === clickedPin)
        {

        res.push(clickedPin);

  }
  else {
    this.masterPinList.push(clickedPin);
  }
  alert(res.length);

  return res;
  }

  finishedEditing(){
    this.selectedPin = null;
  }

  addPin(newPin: Pin){
    this.masterPinList.push(newPin);
  }
}
