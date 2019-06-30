import { Component, OnInit } from '@angular/core';
import { FavpinsService } from '../favpins.service';
import { Pin } from '../models/pin.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-favorite-pins',
  templateUrl: './favorite-pins.component.html',
  styleUrls: ['./favorite-pins.component.css'],
  providers: [FavpinsService, AuthenticationService]
})
export class FavoritePinsComponent implements OnInit {
  pins: FirebaseListObservable<any[]>;



  constructor(private favpinsService: FavpinsService, private authService: AuthenticationService) { }

  ngOnInit() {

    this.authService.user.subscribe(user => {
      if (user == null) {
        alert("Please log in to see your pins!");

      } else {
        this.pins = this.favpinsService.getPins(user.displayName);


      }
    });
  }

}
