import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import {SortByDatePipe} from './sortbydate.pipe';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { PinListComponent } from './pin-list/pin-list.component';
import { EditPinComponent } from './edit-pin/edit-pin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewPinComponent } from './new-pin/new-pin.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    PinListComponent,
    EditPinComponent,
    HeaderComponent,
    FooterComponent,
    NewPinComponent,
    SortByDatePipe,
    CategoryListComponent,
    CategoryDetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
