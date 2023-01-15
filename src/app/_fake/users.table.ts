import {UserList} from "../features/user/model/user";

export class UsersTable {
  public static users: UserList[] = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@demo.com',
    },
    {
      id: 2,
      username: 'user',
      email: 'user@demo.com',
    },
  ];
}
