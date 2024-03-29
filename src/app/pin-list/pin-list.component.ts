import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Pin } from '../models/pin.model';
import { PinService } from '../pin.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FavpinsService } from '../favpins.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.css'],
  providers: [PinService, FavpinsService, AuthenticationService]
})
export class PinListComponent implements OnInit {
  myvalue: string = "AZ";
  pins: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  goToDetailPinPage(clickedPin) {
    this.router.navigate(['pindetail', clickedPin.$key]);

  }
  goToEdit(pin) {
    this.router.navigate(['editpin', pin.$key]);
  }

  beginDeletePin(pin: Pin) {
    this.pinService.deletePin(pin);
  }

  onChange(optionMenu) {
    this.myvalue = optionMenu;
  }

  constructor(private pinService: PinService, private router: Router,
    private favpinsService: FavpinsService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.pins = this.pinService.getPins();
  }

  addToFav(pin: Pin) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        alert("Please log in to see your pins!");

      } else {

        pin.userName = user.displayName;
        this.favpinsService.addToFavPins(pin);


      }
    });
  }


}
