import { Component, OnInit } from '@angular/core';
import { FavpinsService } from '../favpins.service';
import { Pin } from '../models/pin.model';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-favorite-pins',
  templateUrl: './favorite-pins.component.html',
  styleUrls: ['./favorite-pins.component.css'],
  providers: [FavpinsService]
})
export class FavoritePinsComponent implements OnInit {
  pins: FirebaseListObservable<any[]>;



  constructor(private favpinsService: FavpinsService) { }

  ngOnInit() {
    this.pins = this.favpinsService.getPins();
  }

}
