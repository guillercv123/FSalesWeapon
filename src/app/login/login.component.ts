import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IUser} from '../Model/MUser';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Store} from 'redux';
import {AppState} from '../store/app.reducer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  UserData: IUser;

  constructor(
    private userService: UserService,
    private store: Store<AppState>,
    private route: Router,
    private toast: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usuario: new FormControl(''),
      clave: new FormControl(''),
    });
  }

  ngOnDestroy() {
  }

  onSubmitData() {

    this.UserData = {
      usuario: this.loginForm.value.usuario,
      clave : this.loginForm.value.clave
    }
    try {
      this.userService.ValidateUser(this.UserData).subscribe(
        data => {
            if (data) {
              localStorage.setItem('token', data.jwtToken);
              this.route.navigate(['home/ventas']);
            }
         },
        err => {
          this.toast.show(
            `<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">${err.error.message}</span>`,
            '',
            {
              timeOut: 4000,
              closeButton: true,
              enableHtml: true,
              toastClass: 'alert alert-danger alert-with-icon',
              positionClass: 'toast-top-right'
            }
          );
        }
        );
    } catch (e) {
    }
  }

}
