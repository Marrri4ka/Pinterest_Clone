import { Injectable } from '@angular/core';
import { Pin } from './models/pin.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PinService {
  pins: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.pins = database.list('pins');
  }

  getPins() {
    return this.pins;
  }

  getPinById(pinId: string) {
    return this.database.object('pins/' + pinId);
  }

  updatePin(localUpdatedPin) {
    var pinEntryInFirebase = this.getPinById(localUpdatedPin.id);
    pinEntryInFirebase.update({
      name: localUpdatedPin.name,
      category: localUpdatedPin.category,
      date: localUpdatedPin.date
    });
  }

  deletePin(localPinToDelete) {
    var pinEntryInFirebase = this.getPinById(localPinToDelete.$key);
    pinEntryInFirebase.remove();
  }

  addPin(newPin: Pin) {
    this.pins.push(newPin);
  }

}
