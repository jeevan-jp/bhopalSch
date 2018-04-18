import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }
  loginData = {
    email: '',
    password: ''
  };

  login() {

     // console.log(this.loginData);
    //this.auth.login(loginData);

  }

  ngOnInit() {
  }

}
