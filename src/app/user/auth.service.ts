import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser: IUser;

  constructor() {}

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Papa',
      userName,
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
