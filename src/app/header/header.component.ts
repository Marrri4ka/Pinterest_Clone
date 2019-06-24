import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService]

})





export class HeaderComponent implements OnInit {

  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        // this.router.navigate(['public']);
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        // this.router.navigate([]);
      }
    });
  }

  ngOnInit() {
  }

  goToAddPinPage() {
    this.router.navigate(['addpin']);
  }

  showFavPins() {
    this.router.navigate(['favoritepins']);
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();

  }

}
