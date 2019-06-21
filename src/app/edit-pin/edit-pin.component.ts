import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pin } from '../models/pin.model';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-edit-pin',
  templateUrl: './edit-pin.component.html',
  styleUrls: ['./edit-pin.component.css'],
  providers: [PinService]

})
export class EditPinComponent implements OnInit {

  isShowingAddForm: boolean = false;


  @Input() selectedPin;


  constructor(private pinService: PinService) { }

  showAddForm() {
    if (this.isShowingAddForm === true) {
      this.isShowingAddForm = false;
    } else if (this.isShowingAddForm === false) {
      this.isShowingAddForm = true;
    }
  }

  isShowAddForm() {
    return this.isShowingAddForm;
  }

  ngOnInit() {
  }


  beginUpdatingPin(pinToUpdate) {
    this.pinService.updatePin(pinToUpdate);
  }

  beginDeletePin(pinToDelete) {
    this.pinService.deletePin(pinToDelete);
  }

}
