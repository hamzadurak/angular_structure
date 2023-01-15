import {Component} from '@angular/core';
import {UserService} from "../services/user/user.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-guest',
  template: '<router-outlet></router-outlet>',
})
export class GuestComponent {
  constructor(
    private router: Router,
    public userService: UserService
  ) {
    if (userService.isLoggedIn()) {
      this.router.navigate(['/user']);
    }
  }

}
