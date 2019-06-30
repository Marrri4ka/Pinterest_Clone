import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Pin } from '../models/pin.model';
import { PinService } from '../pin.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-new-pin',
  templateUrl: './new-pin.component.html',
  styleUrls: ['./new-pin.component.css'],
  providers: [PinService, CategoryService]

})
export class NewPinComponent implements OnInit {
  categories: FirebaseListObservable<any[]>;


  submitForm(name: string, link: string, date: Date, category: string, imageSrc: string) {
    var newPin: Pin = new Pin(name, link, date, category, this.imageSrc, "");
    this.pinService.addPin(newPin);
    this.router.navigate(['']);
  }

  constructor(private pinService: PinService, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  private imageSrc: string = '';

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
  }

}
