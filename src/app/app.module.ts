import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortByDatePipe } from './sortbydate.pipe';
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
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FavoritePinsComponent } from './favorite-pins/favorite-pins.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { PindetailComponent } from './pindetail/pindetail.component';





export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};


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
    CategoryDetailComponent,
    EditPinComponent,
    FavoritePinsComponent,
    PublicComponent,
    PrivateComponent,
    PindetailComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
