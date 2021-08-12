import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {IUser, IUserWithToken } from '../Model/MUser';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  ValidateUser(user: IUser) {
    return this.http.post(`${environment.apiBack.baseUrl}/${environment.apiBack.servicePath.login}/GetUser`, user).pipe(
       map(
         (response: IUserWithToken) => {
           return response;
         }
       )
    );
  }
}
