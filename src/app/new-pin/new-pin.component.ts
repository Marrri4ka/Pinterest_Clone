import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Pin } from '../models/pin.model';
import { PinService } from '../pin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pin',
  templateUrl: './new-pin.component.html',
  styleUrls: ['./new-pin.component.css'],
  providers: [PinService]

})
export class NewPinComponent implements OnInit {


  submitForm(name: string, link: string, date: Date, category: string) {
    var newPin: Pin = new Pin(name, link, date, category);
    this.pinService.addPin(newPin);
    this.router.navigate(['']);
  }

  constructor(private pinService: PinService, private router: Router) { }

  ngOnInit() {

  }

}
