import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { PinListComponent } from './pin-list/pin-list.component';
import { EditPinComponent } from './edit-pin/edit-pin.component';


@NgModule({
  declarations: [
    AppComponent,
    PinListComponent,
    EditPinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
