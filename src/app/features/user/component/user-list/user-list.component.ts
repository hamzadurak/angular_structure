import {Component, OnInit} from '@angular/core';
import {UserServices} from "../../service/user.services";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userLists: any;

  constructor(private userService: UserServices) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((res: any) => {
      return this.userLists = res;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
    this.getUsers();
  }

}
