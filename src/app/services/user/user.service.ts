import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  isLoggedIn(): boolean {
    const localToken = localStorage.getItem('token');
    return !!(localToken);
  }

  login(form: any, defaultAuth: any): any {
    if (form.email === defaultAuth.email && form.password === defaultAuth.password) {
      if (defaultAuth.authToken) {
        localStorage.setItem('token', defaultAuth.authToken);
        return true;
      } else {
        return false;
      }
    }
  }

  logOut() {
    localStorage.removeItem('token');
  }
}
