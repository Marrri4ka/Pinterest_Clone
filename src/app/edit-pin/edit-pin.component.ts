import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pin } from '../models/pin.model';
import { PinService } from '../pin.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-pin',
  templateUrl: './edit-pin.component.html',
  styleUrls: ['./edit-pin.component.css'],
  providers: [PinService]

})
export class EditPinComponent implements OnInit {

  pinId: string;
  selectedPin: Pin;
  constructor(private pinService: PinService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  showAddForm() {
  }



  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.pinId = urlParameters['id'];

    });

    this.pinService.getPinById(this.pinId).subscribe(dataLastEmittedFromObserver => {
      this.selectedPin = new Pin(dataLastEmittedFromObserver.name,
        dataLastEmittedFromObserver.category,
        dataLastEmittedFromObserver.date);
    });

  }



  beginUpdatingPin(pinToUpdate) {
    this.pinService.updatePin(pinToUpdate, this.pinId);
    this.router.navigate(['']);
  }

  beginDeletePin(pinToDelete) {
    // this.pinService.deletePin(pinToDelete);
  }

}
