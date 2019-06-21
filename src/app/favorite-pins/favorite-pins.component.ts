import { Component, OnInit } from '@angular/core';
import { FavpinsService } from '../favpins.service';
import { Pin } from '../models/pin.model';

@Component({
  selector: 'app-favorite-pins',
  templateUrl: './favorite-pins.component.html',
  styleUrls: ['./favorite-pins.component.css']
})
export class FavoritePinsComponent implements OnInit {

  pins: Pin[] = [

  ];

  constructor(private favpinsService: FavpinsService) { }

  ngOnInit() {
  }

}
