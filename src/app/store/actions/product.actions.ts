import {createAction, props} from '@ngrx/store';
import {ProductModel} from '../models/product.model';

export const requestProduct = createAction(
  '[Product Info] Cargar Producto',
  props<{products: ProductModel[]}>()
);

export const requestProductAll = createAction(
  '[Product Info] Cargar Producto',
  props<{products: ProductModel[]}>()
);
