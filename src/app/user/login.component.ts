import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;

  constructor() {}

  ngOnInit() {}

  login(credentials) {
    console.log(credentials);
  }
}
