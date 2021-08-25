import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {IProduct} from '../Model/MProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProduct() {
   return this.http.get(`${environment.apiBack.baseUrl}/${environment.apiBack.servicePath.product}`).pipe(
      map((response: IProduct[]) => {
            return response
           }
         )
    );
  }

}
