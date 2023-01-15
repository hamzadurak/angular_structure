import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {UserList} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getUsers() {
    return this.httpClient.get<UserList>(`${environment.apiUrl}users`);
  }

  createUser(form: any) {
    return this.httpClient.post<UserList>(`${environment.apiUrl}users`, form);
  }

  updateUser(id: string | null, form: any) {
    return this.httpClient.post<UserList>(`${environment.apiUrl}users/${id}`, form);
  }

  getUser(id: string | null) {
    return this.httpClient.get<UserList>(`${environment.apiUrl}users/${id}`);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}users/${id}`);
  }
}
