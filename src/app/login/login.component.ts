import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IUser} from '../Model/MUser';
import {UserService} from '../services/user.service';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  UserData: IUser;

  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usuario: new FormControl(''),
      clave: new FormControl(''),
    });
  }
  onSubmitData() {

    this.UserData = {
      usuario: this.loginForm.value.usuario,
      clave : this.loginForm.value.clave
    }
    this.userService.ValidateUser(this.UserData).subscribe(
        data => {
         if (data) {
              localStorage.setItem('token', data.jwt);
              this.route.navigate(['home/dashboard']);
         }
        }
      );

  }

}
