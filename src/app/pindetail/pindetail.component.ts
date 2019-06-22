import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { PinService } from '../pin.service';
import { Router } from '@angular/router';
import { Pin } from '../models/pin.model';


@Component({
  selector: 'app-pindetail',
  templateUrl: './pindetail.component.html',
  styleUrls: ['./pindetail.component.css'],
  providers: [PinService]
})
export class PindetailComponent implements OnInit {

  pinId: string;
  selectedPin: Pin;

  constructor(private pinService: PinService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.pinId = urlParameters['id'];

    });

    this.pinService.getPinById(this.pinId).subscribe(dataLastEmittedFromObserver => {
      this.selectedPin = new Pin(dataLastEmittedFromObserver.name,
        dataLastEmittedFromObserver.link,
        dataLastEmittedFromObserver.date,
        dataLastEmittedFromObserver.category

      );
    });
  }
}
