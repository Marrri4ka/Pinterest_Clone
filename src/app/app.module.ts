import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import {SortByDatePipe} from './sortbydate.pipe';

import { AppComponent } from './app.component';
import { PinListComponent } from './pin-list/pin-list.component';
import { EditPinComponent } from './edit-pin/edit-pin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewPinComponent } from './new-pin/new-pin.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PinListComponent,
    EditPinComponent,
    HeaderComponent,
    FooterComponent,
    NewPinComponent,
    SortByDatePipe,
    CategoryListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
