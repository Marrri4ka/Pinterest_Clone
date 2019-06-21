import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Pin } from '../models/pin.model';
import { PinService } from '../pin.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.css'],
  providers: [PinService]
})
export class PinListComponent implements OnInit {
  filterType: string = "AZ";
  pins: FirebaseListObservable<any[]>;
  @Output() clickSender = new EventEmitter();

  editPin(pinToEdit: Pin) {
    this.clickSender.emit(pinToEdit);
  }

  deletePin(pinToDelete: Pin) {
    this.clickSender.emit(pinToDelete);
  }

  onChange(optionMenu) {
    this.filterType = optionMenu;
  }

  constructor(private pinService: PinService) { }

  ngOnInit() {
    this.pins = this.pinService.getPins();
  }

}
