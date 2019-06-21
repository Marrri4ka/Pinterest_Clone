import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Pin } from '../models/pin.model';
import { PinService } from '../pin.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FavpinsService } from '../favpins.service';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.css'],
  providers: [PinService, FavpinsService]
})
export class PinListComponent implements OnInit {
  filterType: string = "AZ";
  pins: FirebaseListObservable<any[]>;


  goToEdit(pin: Pin) {
    this.router.navigate(['editpin', pin.id]);
  }

  beginDeletePin(pin: Pin) {
    this.pinService.deletePin(pin);
  }

  onChange(optionMenu) {
    this.filterType = optionMenu;
  }

  constructor(private pinService: PinService, private router: Router,
    private favpinsService: FavpinsService) { }

  ngOnInit() {
    this.pins = this.pinService.getPins();
  }

  addToFav(pin: Pin) {
    // this.favpinsService.addToFavPins(pin);
    // this.router.navigate(['favoritepins']);
  }

}
