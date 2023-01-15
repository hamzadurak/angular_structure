import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private router: Router,
  ) {
  }

  defaultAuth: any = {
    email: 'admin@demo.com',
    password: 'demo',
    authToken: 'auth-token-8f3ae836da744329a6f93bf20594b5cc',
  };

  form = this.fb.group({
    email: [
      this.defaultAuth.email,
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(320),
      ]),
    ],
    password: [
      this.defaultAuth.password,
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),
    ],
  });


  ngOnInit(): void {

  }


  submit(submit: any) {
    if (this.userService.login(submit, this.defaultAuth)) {
      this.router.navigate(['/user']);
    }
  }
}
