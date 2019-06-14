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
    new Pin('book'),
    new Pin('film')
  ]

  editPin(clickedPin){
    this.selectedPin = clickedPin;
  }

  finishedEditing(){
    this.selectedPin = null;
  }
}
