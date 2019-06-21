import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Pin } from './models/pin.model';

@Injectable()
export class FavpinsService {
  pins: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.pins = database.list('favoritepins');
  }


  getPins() {
    return this.pins;
  }

  addToFavPins(pin: Pin) {
    this.pins.push(pin);

  }

}
