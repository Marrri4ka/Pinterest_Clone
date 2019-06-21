import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Pin } from '../models/pin.model';
import { PinService } from '../pin.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

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

  goToEdit(pin: Pin) {
    this.router.navigate(['editpin', pin.id]);
  }

  beginDeletePin(pin: Pin) {
    this.pinService.deletePin(pin);
  }

  onChange(optionMenu) {
    this.filterType = optionMenu;
  }

  constructor(private pinService: PinService, private router: Router) { }

  ngOnInit() {
    this.pins = this.pinService.getPins();
  }

}
