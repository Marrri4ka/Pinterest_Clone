import { Component } from '@angular/core';
import { Pin } from './models/pin.model';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['public']);
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.router.navigate([]);
      }
    });
  }

  selectedPin = null;

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();

  }

  editPin(clickedPin) {
    this.selectedPin = clickedPin;
  }

  deletePin(clickedPin: Pin) {
    /* var res =[];

        if(this.selectedPin === clickedPin)
        {

        res.push(clickedPin);

  }
  else {
    this.masterPinList.push(clickedPin);
  }

  return res;*/
  }

  finishedEditing() {
    this.selectedPin = null;
  }

  addPin(newPin: Pin) {
    // this.masterPinList.push(newPin);
  }
}
