import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Pin } from '../models/pin.model';

@Component({
  selector: 'app-edit-pin',
  templateUrl: './edit-pin.component.html',
  styleUrls: ['./edit-pin.component.css']
})
export class EditPinComponent {

@Input()childSelectedPin: Pin;
@Output() clickedDone = new EventEmitter();


finishedEditing(){
  this.clickedDone.emit();
}

}
