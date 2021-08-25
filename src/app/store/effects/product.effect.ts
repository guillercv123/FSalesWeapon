import { Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {ProductService} from '../../services/product.service';
import {requestProductAll, requestProduct} from '../actions/product.actions';
import {IProduct} from '../../Model/MProduct';


@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private producService: ProductService
  ) {}

  getProduct$ = createEffect(
    () => this.actions$.pipe(
      ofType(requestProduct),
      mergeMap(
        (action) => this.producService.getProduct().pipe(
          map( (response: IProduct[]) => requestProductAll({products: response})
          )
        )
      )
    )
  );


}
