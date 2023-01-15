import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {UserServices} from "../../service/user.services";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public userService: UserServices,
  ) {
  }

  form = this.fb.group({
    username: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(320),
      ]),
    ],
    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(320),
      ]),
    ],
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),
    ],
  });

  id = this.route.snapshot.paramMap.get('id');
  isCreate = !(!!this.id);

  ngOnInit(): void {
    if (!this.isCreate) {
      this.userService.getUser(this.id).subscribe((res: any) => {
        this.form.patchValue({
          email: res.email,
          username: res.username,
          password: res.password,
        });
      });
    }
  }

  submit(form: any) {
    if (this.isCreate) {
      this.userService.createUser(form).subscribe();
    } else {
      this.userService.updateUser(this.id, form).subscribe();
    }
  }

}
